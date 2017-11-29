import * as React from 'react';
import { AvailabilityDay } from './AvailabilityDay';
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
        <div className='leftSide'>
          <AvailabilityDay day="Sunday"/>
          <AvailabilityDay day="Monday"/>
          <AvailabilityDay day="Tuesday"/>
          <AvailabilityDay day="Wednesday"/>
          <AvailabilityDay day="Thursday"/>
          <AvailabilityDay day="Friday"/>
        </div>
      </div>
    );
  }
}

export default App;
