import * as React from 'react'
import { ScheduleDay } from './ScheduleDay'
import { Day, Shift } from './Constants'
import '../styles/Schedule.css'

export class Schedule extends React.Component<{schedule: any[]},{shift1: ScheduleShift | null, shift2: ScheduleShift | null}> {

  constructor(props: any) {
    super(props)

    this.state = {
      shift1: null,
      shift2: null
    }

    this.swap = this.swap.bind(this)
    this.selectShift = this.selectShift.bind(this)
  }

  render() {
    const schedule = this.props.schedule
    return (
      <div className='rightSide'>
        <ScheduleDay day={Day.Sunday} schedule={schedule[0]} swap={this.swap} selectShift={this.selectShift}/>
        <ScheduleDay day={Day.Monday} schedule={schedule[1]}  swap={this.swap} selectShift={this.selectShift}/>
        <ScheduleDay day={Day.Tuesday} schedule={schedule[2]}  swap={this.swap} selectShift={this.selectShift}/>
        <ScheduleDay day={Day.Wednesday} schedule={schedule[3]} swap={this.swap} selectShift={this.selectShift}/>
        <ScheduleDay day={Day.Thursday} schedule={schedule[4]} swap={this.swap} selectShift={this.selectShift}/>
        <ScheduleDay day={Day.Friday} schedule={schedule[5]} swap={this.swap} selectShift={this.selectShift}/>
      
        <div className='swapPanel'>
          <button className='btn swapButton' onClick={this.swap}>Swap</button>
          <span className='swapSpan'>Shift 1:</span>
          {this.state.shift1 !== null && this.state.shift1.toString()}
          <span className='swapSpan'>Shift 2:</span>
          {this.state.shift2 !== null && this.state.shift2.toString()}
        </div>
      </div>
    )
  }

  swap = () => {
    if (this.state.shift1 && this.state.shift2) {
      // swap the two
      // /api/api.cgi/schedule/day1/hour1/onyen1/day2/hour2/onyen2
      fetch('/api/api.cgi/schedule/' + this.state.shift1.urlMode() + '/' + this.state.shift2.urlMode(), {
        method: 'post'
      }).then((response) => {
        console.log(response.json())
      })
    } else {
      // say that we need two selected shifts
    } 
  }

  selectShift = (s: ScheduleShift) => {
    if (s.equals(this.state.shift1)) {
      this.setState({
        shift1: null,
        shift2: this.state.shift2
      })
    } else if (s.equals(this.state.shift2)) {
      this.setState({
        shift1: this.state.shift1,
        shift2: null
      })
    } else if (!this.state.shift1) {
      this.setState({
        shift1: s,
        shift2: this.state.shift2
      })
    } else if (!this.state.shift2){
      this.setState({
        shift1: this.state.shift1,
        shift2: s
      })
    } else {
      this.setState({
        shift1: this.state.shift1,
        shift2: s
      })
    }
    setTimeout(() => {
      console.log(this.state)
    },         1000)
  }
}

export class ScheduleShift {
  day: Day
  hour: Shift
  onyen: string

  constructor(day: Day, hour: Shift, onyen: string) {
    this.day = day
    this.hour = hour
    this.onyen = onyen
  }

  equals(other: ScheduleShift | null): boolean {
    if (other === null) {return false}
    return this.day === other.day && this.hour === other.hour && this.onyen === other.onyen
  }

  toString(): string {
    return this.onyen + " on " + this.day + " from " + this.hour
  }

  urlMode(): string {
    let hours = this.hour.split('-')
    return this.getDay(this.day) + '/' + hours[0] + '/' + this.onyen
  }

  getDay(d: Day): number {
    switch (d) {
      case Day.Sunday: {
        return 0
      }
      case Day.Monday: {
        return 1
      }
      case Day.Tuesday: {
        return 2
      }
      case Day.Wednesday: {
        return 3
      }
      case Day.Thursday: {
        return 4
      }
      case Day.Friday: {
        return 5
      }
      case Day.Saturday: {
        return 6
      }
      default: {
        return 7
      }
    }
  }
}