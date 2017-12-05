import * as React from 'react';
import { AvailabilityDay } from './AvailabilityDay';
import '../styles/App.css';
import '../styles/SplitPane.css'

import { Day } from './AvailabilitySquare'
import { ScheduleDay } from './ScheduleDay';
import { CollapsibleHourShift } from './CollapsibleHourShift';

const SplitPane = require('react-split-pane')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to ShiftOverflow</h2>
        </div>
        <div className="App-center">
          <SplitPane split='vertical' minSize={250} defaultSize={350} primary="first" >
            <div>
              <h1> Availability </h1>
              <div className='leftSide'>
                <AvailabilityDay day={Day.Sunday}/>
                <AvailabilityDay day={Day.Monday}/>
                <AvailabilityDay day={Day.Tuesday}/>
                <AvailabilityDay day={Day.Wednesday}/>
                <AvailabilityDay day={Day.Thursday}/>
                <AvailabilityDay day={Day.Friday}/>
              </div>
            </div>
            
            <div>
            <h1> Schedule </h1>
      
            <div className='rightSide'>     
                <ScheduleDay day={Day.Sunday}/>
                <ScheduleDay  day={Day.Monday}/>
                <ScheduleDay  day={Day.Tuesday}/>
                <ScheduleDay  day={Day.Wednesday}/>
                <ScheduleDay  day={Day.Thursday}/>
                <ScheduleDay  day={Day.Friday}/>
                <CollapsibleHourShift day={Day.Sunday}/>
              </div>
            </div>
          </SplitPane>
        </div>
        <div className="App-footer">
          <h3>Created by<br/>
          Brooks Townsend<br/>
          Brooke Canter<br/>
          Helen Qin<br/>
          Kiet Huynh</h3>
        </div>
     </div>
    );
  }
}

export default App;
