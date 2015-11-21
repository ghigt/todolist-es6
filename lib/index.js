'use strict';

const path = require('path');

const express = require('express');
const engine = require('./middlewares/engine');

const app = express();

app.engine('js', engine.react({
  layout: path.resolve(__dirname, 'layouts', 'home.jade')
}));

app.set('view engine', 'js');
app.set('views', path.resolve(__dirname, 'containers'));

if(process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, '..', 'build')));
  app.use('/vendors', express.static(path.resolve(__dirname, '..', 'node_modules')));
} else {
  app.use('/', express.static(path.resolve(__dirname, '..', 'public')));
  app.use('/app', express.static(path.resolve(__dirname, '..', 'app')));
  app.use('/vendors', express.static(path.resolve(__dirname, '..', 'node_modules')));
}

app.use(engine.setUserAgent());

app.get('/', (req, res) => {
  const items = [];
  for(let i = 0; i < 100; i++) {
    items.push(i);
  }
  res.render('home', {
    data: {
      props: {
        elements: items
      }
    }
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

module.exports = app;
