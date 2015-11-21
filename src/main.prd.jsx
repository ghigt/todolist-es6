import React from 'react';
import ReactDom from 'react-dom';
import * as containers from './containers';

const {container, props} = JSON.parse(document.getElementById('data').innerText);

Object.keys(containers).reduce((agg, key) => (agg[key] = () => ReactDom.render(
  React.createElement(containers[key], props || {}),
  document.getElementById('content')
), agg), {})[container]();
