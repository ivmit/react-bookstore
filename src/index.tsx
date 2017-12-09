import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';

import App from './App';


const root = document.getElementById('app');

declare const module: any;

const render = (Component: any) => ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
  root
);

render(App);
if (module.hot) {
  module.hot.accept();
}
