import * as React from 'react';
import { Test } from './Test';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Test text="This is a property" />
        <Test text="This too" />
      </div>
    );
  }
}

export default App;
