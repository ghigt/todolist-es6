'use strict';

const fs = require('fs');

const ReactDOMServer = require('react-dom/server');
const React = require('react');
const dust = require('dustjs-linkedin');

exports.react = settings => (filePath, options, callback) => {
  try {
    fs.readFile(settings.layout, 'utf8', (err, content) => {
      if (err) {
        callback(err);
      } else {
        const data = options.data || {};
        const compiled = dust.compile(content, 'page');
        dust.loadSource(compiled);
        dust.render('page', Object.assign(options, {
          data: JSON.stringify(Object.assign({
            container: filePath
             .replace(new RegExp('^' + options.settings.views + '/'), '')
             .replace(new RegExp('\.' + options.settings['view engine'] + '$'), '')
             .replace(/[\/\-_]+/g, ' ').replace(/[\s](\w)/g, (match, letter) => letter.toUpperCase())
          }, data))
        }, {
          production: process.env.NODE_ENV === 'production',
          content: ReactDOMServer.renderToString(React.createElement(require(filePath)[data.key || 'default'], data.props))
        }), (err, html) => {
          if (err) {
            callback(err);
          } else {
            callback(null, html);
          }
        });
      }
    });
  } catch(e) {
    callback(e);
  }
};

exports.setUserAgent = settings => (req, res, next) => {
  global.navigator = {
    userAgent: req.headers['user-agent']
  };
  next();
};
