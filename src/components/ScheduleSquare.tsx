import * as React from 'react'
import '../styles/ScheduleSquare.css'
import { Day, Shift } from './Constants'
import { ScheduleShift } from './Schedule'

export class ScheduleSquare extends React.Component <{day: Day, shift: Shift, onyens: string[], swap: () => void, selectShift: (s: ScheduleShift) => void}> {

    constructor(props: any) {
      super(props)
    }

    render() {
      const color = this.props.day === Day.Sunday ||
                    this.props.day === Day.Tuesday ||
                    this.props.day === Day.Thursday ? 'lightgray' : 'white'
      return (
        <div id='sched_square' style={{backgroundColor: color}}>
          {
            this.props.onyens.map((onyen) =>
            <div className='onyen' key={this.props.day + ' ' + onyen} onClick={() => this.props.selectShift(new ScheduleShift(this.props.day, this.props.shift, onyen))}> {onyen} </div>)
          }
        </div>
      );
    }
}