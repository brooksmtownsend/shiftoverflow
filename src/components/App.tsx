// React lets us write HTML-ish tags but we are really just writing
// XML based object representations

// React uses essentially a fake DOM to be rendered on the server
// It uses the least amount of DOM manipulation possible in order to 
// keep your components up to date

import * as React from 'react'
import { Availability} from './Availability'
import '../styles/App.css'
import '../styles/SplitPane.css'

import { Schedule } from './Schedule'
import { ScheduleHeader } from './ScheduleHeader'
import { CollapsibleHourShift } from './CollapsibleHourShift'
import { Button } from 'react-materialize'
import { LoginWithGithub } from './LoginWithGithub'

// every component has a state object and props object
//  Props don't change
//  State starts with default value and mutates
class App extends React.Component  <{}, {isWeekly: boolean, style: {backgroundColor: string}}> {

  constructor(props: any) {
    super(props);
    this.state = {isWeekly: true,
                  style: {backgroundColor: 'lightskyblue'}
    }
    this.changeView = this.changeView.bind(this);
  }
  
  // if the week button is clicked and we are viewing by day then toggle to byweekly
  // OR if the day button is clicked and we are viewing by weekly then toggle to by day  
  changeView(id: String) {
    if (id === 'week' && !this.state.isWeekly || 
        id === 'day' && this.state.isWeekly) {
          this.setState({isWeekly: !this.state.isWeekly})      
    } 
  }
  
  render() {
    const schedule = this.getSchedule()

    return (
      <div className="App">
        <div className="App-header">
          <h2>ShiftOverflow</h2>
        </div>
        <div className="App-center">
          <div className='leftContainer'>
            <h1> Availability </h1>
            <div className='leftSide'>
              <Availability/>
            </div>
            <LoginWithGithub />
          </div>
          <div className='rightContainer'>
            
              <h1> Schedule </h1>
                <div id="button-pane">
                  <div id="buttons light-blue lighten-5">
                    <Button id='week' onClick={(e) => this.changeView(e.target.id)} style={this.state.style}>Weekly</Button>
                    <Button id='day' onClick={(e) => this.changeView(e.target.id)} style={this.state.style}>Day</Button>      
                    <hr></hr>
                  </div> 
                </div>
              <div className='times'>
                <div id='sched_shiftLabels'>
                <div>{}</div>
                <div className='shiftLabel'>{Shift.TenToEleven}</div>
                <div className='shiftLabel'>{Shift.ElevenToTwelve}</div>
                <div className='shiftLabel'>{Shift.TwelveToOne}</div>
                <div className='shiftLabel'>{Shift.OneToTwo}</div>
                <div className='shiftLabel'>{Shift.TwoToThree}</div>
                <div className='shiftLabel'>{Shift.ThreeToFour}</div>
                <div className='shiftLabel'>{Shift.FourToFive}</div>
                <div className='shiftLabel'>{Shift.FiveToSix}</div>
                <div className='shiftLabel'>{Shift.SixToSeven}</div>
                <div className='shiftLabel'>{Shift.SevenToEight}</div>
              </div>
              </div>
            
          {/* <h1> Schedule </h1>
          <div id="button-pane">
            <div id="buttons light-blue lighten-5">
              <Button id='week' onClick={(e) => this.changeView(e.target.id)} style={this.state.style}>Weekly</Button>
              <Button id='day' onClick={(e) => this.changeView(e.target.id)} style={this.state.style}>Day</Button>      
            </div> 
          </div>   */}
          {/* <ScheduleHeader/> */}
           {this.state.isWeekly && <ScheduleHeader/>}
           {this.state.isWeekly && <div className='rightSide'>
              <Schedule schedule={schedule}/>
            </div> }
<<<<<<< HEAD
           
            <div id="day-view">
              {!this.state.isWeekly && <div className='kit'> 
                  <CollapsibleHourShift d={new Date()}/>
                </div>}
            </div>
            {/* {!this.state.isWeekly && <div className='kit'> 
                <CollapsibleHourShift d={new Date()}/>
              </div>} */}
=======
            {!this.state.isWeekly && <div className='kit'> 
                <CollapsibleHourShift d={new Date()} schedule={schedule[new Date().getDay()]}/>
              </div>}
>>>>>>> cb319d9684374328c59e0b9e3f8bf6471d767d88
          </div>
        </div>
     </div>
    );
  }

  getSchedule(): any[][] {
    // Hard coded schedule for now, but should get this from server eventually
    let schedule: JSON = require('../data/currentSchedule.json')
    let shifts: any[] = schedule['shifts'] 
    return shifts 
  }
}

export default App;