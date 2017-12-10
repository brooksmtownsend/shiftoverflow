// React lets us write HTML-ish tags but we are really just writing
// XML based object representations

// React uses essentially a fake DOM to be rendered on the server
// It uses the least amount of DOM manipulation possible in order to 
// keep your components up to date

import * as React from 'react'
import { AvailabilityDay } from './AvailabilityDay'
import '../styles/App.css'
import '../styles/SplitPane.css'

import { Day } from './AvailabilitySquare'
import { ScheduleDay } from './ScheduleDay'
import { CollapsibleHourShift } from './CollapsibleHourShift'
import { Button } from 'react-materialize'

// every component has a state object and props object
//  Props don't change
//  State starts with default value and mutates
class App extends React.Component  <{}, {isWeekly: boolean}> {

  constructor(props: any) {
    super(props);
    this.state = {isWeekly: true,
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
  open(id: String) {
    let collapsible = document.getElementsByClassName('collapsible-header');
    for (let i = 0; i < collapsible.length; i++) {
      collapsible[i].className += " active";
    }

    let lis = document.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
      lis[i].className += ' active'
    }

    let bodys: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('collapsible-body') as HTMLCollectionOf<HTMLElement>;
    for( let i = 0; i < bodys.length; i++) {
      bodys[i].style.display = 'block'
    }
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>ShiftOverflow</h2>
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
          <div id="button-pane">
            <div id="buttons">
              <Button id='week' onClick={(e) => this.changeView(e.target.id)}>Weekly</Button>
              <Button id='day' onClick={(e) => this.changeView(e.target.id)}>Day</Button>      
             
          </div> 
          </div>  
           {this.state.isWeekly && <div className='rightSide'>
           <div className='color'>
            <ScheduleDay day={Day.Sunday} />
            </div>
                <ScheduleDay  day={Day.Monday}/>
            <div className='color'>
            <ScheduleDay  day={Day.Tuesday}/>
            </div>
                 <ScheduleDay  day={Day.Wednesday}/>
            <div className='color'>
            <ScheduleDay  day={Day.Thursday}/>
            </div>
               <ScheduleDay  day={Day.Friday}/>
              
            </div> }
           {!this.state.isWeekly && <div className='kit'> 
              <CollapsibleHourShift d={new Date()}/>
            </div>}
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
