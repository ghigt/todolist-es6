import React from 'react';
import ReactDom from 'react-dom';

const {container, props} = JSON.parse(document.getElementById('data').innerText);

System.import('./app/containers/' + container).then(container => {
  console.log('-- Application loaded');
  ReactDom.render(
    React.createElement(container.default, props || {}),
    document.getElementById('content')
  );
});
