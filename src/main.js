import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import * as containers from './containers/index';
// import configureStore from './store/configureStore';

const store = configureStore();

const {container, props} = JSON.parse(document.getElementById('data').innerText);

render(
  // React.createElement(Provider, { store: store },
  //   React.createElement(containers[container], props || {})), NOTE: Needs to be
    React.createElement(containers[container], props || {}),
  document.getElementById('content')
);
