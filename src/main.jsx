import React from 'react';
import ReactDom from 'react-dom';

const data = JSON.parse(document.getElementById('data').innerText);

System.import('./app/containers/' + data.container).then(container => {
  ReactDom.render(React.createElement(container[data.key || 'default'], data.props || {}), document.getElementById('content'));
});
