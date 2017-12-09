import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const root = document.getElementById('root');

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
