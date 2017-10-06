// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as StyleProvider} from 'react-fela';
import {createRenderer} from 'fela';
import css from 'css';
import App from 'containers/App';

import configureStore from './store';

const store = configureStore();
const renderer = createRenderer();

css(renderer.renderStatic);

ReactDOM.render(
  <StoreProvider store={store}>
    <StyleProvider renderer={renderer}>
      <App />
    </StyleProvider>
  </StoreProvider>,
  document.getElementById('root')
);
