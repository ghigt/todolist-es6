'use strict';

const ReactDOMServer = require('react-dom/server');
const React = require('react');

exports.react = settings => (filePath, options, callback) => {
  try {
    const data = options.data || {};
    const template = require('jade').compileFile(settings.layout);
    const html = template(Object.assign(options, {
      data: JSON.stringify(Object.assign({
        container: filePath
         .replace(new RegExp('^' + options.settings.views + '/'), '')
         .replace(new RegExp('\.' + options.settings['view engine'] + '$'), '')
         .replace(/[\/\-_]+/g, ' ').replace(/[\s](\w)/g, (match, letter) => letter.toUpperCase())
      }, data))
    }, {
      content: ReactDOMServer.renderToString(React.createElement(require(filePath)[data.key || 'default'], data.props))
    }));
    callback(null, html);
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
