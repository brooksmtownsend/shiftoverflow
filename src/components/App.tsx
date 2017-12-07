// React lets us write HTML-ish tags but we are really just writing
// XML based object representations

// React uses essentially a fake DOM to be rendered on the server
// It uses the least amount of DOM manipulation possible in order to 
// keep your components up to date


import * as React from 'react';
import { AvailabilityDay } from './AvailabilityDay';
import '../styles/App.css';
import '../styles/SplitPane.css'

import { Day } from './AvailabilitySquare'
import { ScheduleDay } from './ScheduleDay';
import { CollapsibleHourShift } from './CollapsibleHourShift';

 // every component has a state object and props object
//  Props don't change
//  State starts with default value and mutates
class App extends React.Component  <{}> {

  isWeekly: boolean;
  constructor(props: any) {
    super(props);
    this.state = {isWeekly: true}
    this.changeView = this.changeView.bind(this);
  }
  
  changeView() {
    this.setState({isWeekly: !this.isWeekly})
  }
  // changeDay() {
  //   this.setState({isWeekly: false})
  // }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to ShiftOverflow</h2>
        </div>
        <div className="App-center">
          <div className='leftContainer'>
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
          <div className='verticalDivide'></div>
          <div className='rightContainer'>
          <h1> Schedule </h1>
<div>
          <button id='week' onClick={() => this.changeView()}>View Weekly
          {!this.isWeekly && <div className='rightSide'></div>} 
            </button>
            <button id='day' onClick={() => this.changeView()}>View Day
            {!this.isWeekly && <div className='kit'></div>} 
            </button>
     </div>   
            <div className='rightSide'>
              <ScheduleDay day={Day.Sunday}/>
              <ScheduleDay  day={Day.Monday}/>
              <ScheduleDay  day={Day.Tuesday}/>
              <ScheduleDay  day={Day.Wednesday}/>
              <ScheduleDay  day={Day.Thursday}/>
              <ScheduleDay  day={Day.Friday}/>
              </div>
            <div className='kit'>
              <CollapsibleHourShift day={Day.Sunday}/>
            </div>
            {/* <div><CollapsibleHourShift day={Day.Sunday}/></div> */}
          </div>
        </div>
        {/* <div className="App-footer">
          <h3>Created by<br/>
          Brooks Townsend<br/>
          Brooke Canter<br/>
          Helen Qin<br/>
          Kiet Huynh</h3>
        </div> */}
     </div>
    );
  }
  
}

export default App;
