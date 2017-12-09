import * as React from 'react';

import { Hello } from './components/Hello';
export default class App extends React.Component {
  public render() {
    return (
        <div><Hello compiler='TypeasScript' framework='React' /></div>
    );
  }
}
