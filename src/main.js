import React from 'react';
import ReactDom from 'react-dom';
import * as containers from './containers/index';

const {container, props = {}} = JSON.parse(document.getElementById('data').innerText);

ReactDom.render(
  React.createElement(containers[container], props),
  document.getElementById('content')
);
