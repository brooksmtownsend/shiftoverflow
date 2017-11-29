import * as React from 'react';
import { AvailabilityDay } from './AvailabilityDay';
import '../styles/App.css';

const SplitPane = require('react-split-pane')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to ShiftOverflow</h2>
        </div>
        <SplitPane split='vertical' minSize={350} defaultSize={500}>
          <div>
            <h1> Availability </h1>
            <div className='leftSide'>
              <AvailabilityDay day="Sunday"/>
              <AvailabilityDay day="Monday"/>
              <AvailabilityDay day="Tuesday"/>
              <AvailabilityDay day="Wednesday"/>
              <AvailabilityDay day="Thursday"/>
              <AvailabilityDay day="Friday"/>
            </div>
          </div>
          <div className='rightSide'>
            <h1> Schedule? </h1>
          </div>
        </SplitPane>
     </div>
    );
  }
}

export default App;
