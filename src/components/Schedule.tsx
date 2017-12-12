import * as React from 'react'
import { ScheduleDay } from './ScheduleDay'
import { Day, Shift } from './Constants'
import '../styles/Schedule.css'

export class Schedule extends React.Component<{schedule: any[]},{shift1: ScheduleShift | null, shift2: ScheduleShift | null, schedule: string[][][] | null}> {

  constructor(props: any) {
    super(props)

    this.state = {
      shift1: null,
      shift2: null,
      schedule: null
    }

    this.swap = this.swap.bind(this)
    this.selectShift = this.selectShift.bind(this)

    let getSchedule = async () => {
      const schedule = await this.getSchedule()
      this.setState({
        schedule: schedule
      })
    }
    getSchedule()
  }

  render() {
      return (
        <div className='rightSide'>
          {this.state.schedule && <div className='rightSide' style={{padding: 0, margin: 0}}>
          <ScheduleDay day={Day.Sunday} schedule={this.state.schedule[0]} swap={this.swap} selectShift={this.selectShift} />
          <ScheduleDay day={Day.Monday} schedule={this.state.schedule[1]}  swap={this.swap} selectShift={this.selectShift}/>
          <ScheduleDay day={Day.Tuesday} schedule={this.state.schedule[2]}  swap={this.swap} selectShift={this.selectShift}/>
          <ScheduleDay day={Day.Wednesday} schedule={this.state.schedule[3]} swap={this.swap} selectShift={this.selectShift}/>
          <ScheduleDay day={Day.Thursday} schedule={this.state.schedule[4]} swap={this.swap} selectShift={this.selectShift}/>
          <ScheduleDay day={Day.Friday} schedule={this.state.schedule[5]} swap={this.swap} selectShift={this.selectShift}/>
        </div>}
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

  getSchedule(): Promise<string[][][]> {
    return new Promise((resolve, reject) => {
      return fetch('/api/api.cgi/schedule', {
        method: 'get'
        }).then(response => {
          if (response.ok) {
            let schedule: string[][][] = [[], [], [], [], [], [], []] 
            response.json().then(res => {
              let json = res
              let s = json['Schedule']
              for (let i = 0; i < s.length; i++) {
                if (schedule[s[i][0]][s[i][1]] === undefined) {schedule[s[i][0]][s[i][1]] = []}
                schedule[s[i][0]][s[i][1]].push(s[i][2])
              }
            })
            this.setState({
              schedule: schedule
            })
            return schedule
          } 
          return reject(response)
        }).catch(error => {
          return reject(error)
        })
    })
  }

  swap = () => {
    if (this.state.shift1 && this.state.shift2) {
      // swap the two
      let body = JSON.stringify({
        day1: this.state.shift1.getDay(this.state.shift1.day),
        hour1: this.state.shift1.hour.split('-')[0],
        onyen1: this.state.shift1.onyen,
        day2: this.state.shift2.getDay(this.state.shift2.day),
        hour2: this.state.shift2.hour.split('-')[0],
        onyen2: this.state.shift2.onyen
      })
      fetch('/api/api.cgi/swapShift', {
        method: 'PUT',
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
      } as any).then(raw => raw.json().then(res => {
        console.log(res)
        console.log(raw)
      }))
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