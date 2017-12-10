import * as React from 'react'
import '../styles/ScheduleSquare.css'
import { Day, Shift } from './Constants'

export class ScheduleSquare extends React.Component <{day: Day, shift: Shift}> {
    render() {
      const color = this.props.day === Day.Sunday ||
                    this.props.day === Day.Tuesday ||
                    this.props.day === Day.Thursday ? 'lightgray' : 'white'
      return (
        <div id='sched_square' style={{backgroundColor: color}}>
        </div>
      );
    }
}