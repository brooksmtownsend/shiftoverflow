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
    const schedule = this.getSchedule()
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

  getSchedule(): string[][][] {
   let schedule: string[][][] = [[], [], [], [], [], [], []] 
   // let testJ = {"Schedule": [[0, 12, "khuynh13"], [0, 12, "smganci"], [0, 12, "eheckel"], [0, 12, "dunnac11"], [0, 13, "khuynh13"], [0, 13, "smganci"], [0, 13, "eheckel"], [0, 13, "dunnac11"], [0, 14, "khuynh13"], [0, 14, "marygold"], [0, 14, "ltrogdon"], [0, 14, "smganci"], [0, 14, "eheckel"], [0, 14, "dunnac11"], [0, 15, "kyracm"], [0, 15, "marygold"], [0, 15, "ltrogdon"], [0, 15, "smganci"], [0, 15, "ammccoy"], [0, 15, "eheckel"], [0, 15, "dunnac11"], [0, 16, "kyracm"], [0, 16, "marygold"], [0, 16, "ltrogdon"], [0, 16, "ammccoy"], [0, 16, "dunnac11"], [1, 10, "kyracm"], [1, 10, "tabathav"], [1, 10, "markp"], [1, 11, "zihe"], [1, 11, "kyracm"], [1, 11, "braderic"], [1, 11, "tabathav"], [1, 12, "zihe"], [1, 12, "kyracm"], [1, 12, "tabathav"], [1, 12, "shanesp"], [1, 13, "braderic"], [1, 13, "mscruser"], [1, 13, "shanesp"], [1, 13, "brooksmt"], [1, 14, "braderic"], [1, 14, "jgalfaro"], [1, 14, "shanesp"], [1, 14, "brooksmt"], [1, 14, "vemm97"], [1, 15, "braderic"], [1, 15, "jgalfaro"], [1, 15, "shanesp"], [1, 15, "brookebc"], [1, 15, "vemm97"], [1, 15, "youngjt"], [1, 16, "meli727"], [1, 16, "braderic"], [1, 16, "benl1"], [1, 16, "brookebc"], [1, 16, "vemm97"], [1, 16, "mayura"], [1, 17, "codycody"], [1, 17, "morgana4"], [1, 17, "tabathav"], [1, 17, "benl1"], [1, 17, "brookebc"], [1, 17, "mayura"], [1, 18, "codycody"], [1, 18, "morgana4"], [1, 18, "perryh"], [1, 18, "brookebc"], [1, 18, "hdezwaan"], [1, 19, "codycody"], [1, 19, "morgana4"], [1, 19, "perryh"], [1, 19, "wberner"], [1, 19, "sunmiche"], [2, 10, "idrees"], [2, 10, "rasikar"], [2, 10, "perryh"], [2, 10, "etong"], [2, 11, "idrees"], [2, 11, "jamhenry"], [2, 11, "codycody"], [2, 11, "mscruser"], [2, 11, "etong"], [2, 11, "ghstein"], [2, 11, "ihinks"], [2, 12, "idrees"], [2, 12, "jamhenry"], [2, 12, "codycody"], [2, 12, "perryh"], [2, 12, "ghstein"], [2, 13, "idrees"], [2, 13, "kakiryan"], [2, 13, "jamhenry"], [2, 13, "johnjo8"], [2, 13, "ghstein"], [2, 13, "youngjt"], [2, 13, "mayura"], [2, 14, "meli727"], [2, 14, "jamhenry"], [2, 14, "johnjo8"], [2, 14, "dfirrin"], [2, 14, "guerrera"], [2, 14, "heather1"], [2, 14, "sydneyam"], [2, 14, "youngjt"], [2, 15, "rasikar"], [2, 15, "masonmc"], [2, 15, "dfirrin"], [2, 15, "guerrera"], [2, 15, "heather1"], [2, 15, "sydneyam"], [2, 15, "hdezwaan"], [2, 15, "youngjt"], [2, 15, "mayura"], [2, 16, "rasikar"], [2, 16, "jgillies"], [2, 16, "masonmc"], [2, 16, "dfirrin"], [2, 16, "guerrera"], [2, 16, "heather1"], [2, 16, "sydneyam"], [2, 16, "hdezwaan"], [2, 16, "youngjt"], [2, 16, "mayura"], [2, 17, "masonmc"], [2, 17, "dfirrin"], [2, 17, "tiaram"], [2, 17, "heather1"], [2, 17, "sydneyam"], [2, 17, "hdezwaan"], [2, 17, "sunmiche"], [2, 18, "masonmc"], [2, 18, "etong"], [2, 18, "benl1"], [2, 18, "tiaram"], [2, 18, "wberner"], [2, 18, "brookebc"], [2, 18, "heather1"], [2, 18, "sunmiche"], [2, 19, "hankh"], [2, 19, "meli727"], [2, 19, "etong"], [2, 19, "benl1"], [2, 19, "ltrogdon"], [2, 19, "wberner"], [2, 19, "sunmiche"], [3, 10, "tabathav"], [3, 10, "shree"], [3, 10, "markp"], [3, 10, "vemm97"], [3, 11, "tabathav"], [3, 11, "shree"], [3, 11, "markp"], [3, 11, "vemm97"], [3, 12, "hankh"], [3, 12, "tabathav"], [3, 12, "shanesp"], [3, 13, "hankh"], [3, 13, "mscruser"], [3, 13, "jgalfaro"], [3, 13, "shanesp"], [3, 14, "meli727"], [3, 14, "shree"], [3, 14, "dfirrin"], [3, 14, "jgalfaro"], [3, 15, "meli727"], [3, 15, "armandoj"], [3, 15, "kgbuige"], [3, 15, "brookebc"], [3, 16, "meli727"], [3, 16, "armandoj"], [3, 16, "kgbuige"], [3, 16, "brookebc"], [3, 17, "meli727"], [3, 17, "armandoj"], [3, 17, "kgbuige"], [3, 17, "brookebc"], [3, 18, "armandoj"], [3, 18, "codycody"], [3, 18, "kgbuige"], [3, 18, "brookebc"], [3, 19, "codycody"], [3, 19, "jtian98"], [3, 19, "etong"], [3, 19, "wberner"], [4, 10, "jtian98"], [4, 10, "cara97"], [4, 10, "perryh"], [4, 10, "zakl14"], [4, 11, "jamhenry"], [4, 11, "jtian98"], [4, 11, "cara97"], [4, 11, "zakl14"], [4, 12, "jamhenry"], [4, 12, "jtian98"], [4, 13, "kakiryan"], [4, 13, "jamhenry"], [4, 13, "shree"], [4, 13, "markp"], [4, 14, "kakiryan"], [4, 14, "khuynh13"], [4, 14, "shree"], [4, 14, "krissy"], [4, 15, "kakiryan"], [4, 15, "khuynh13"], [4, 15, "krissy"], [4, 15, "heather1"], [4, 16, "cclarkm"], [4, 16, "krissy"], [4, 16, "ammccoy"], [4, 16, "heather1"], [4, 17, "jgillies"], [4, 17, "cclarkm"], [4, 17, "morgana4"], [4, 17, "krissy"], [4, 17, "ammccoy"], [4, 18, "jgillies"], [4, 18, "cclarkm"], [4, 18, "morgana4"], [4, 18, "zakl14"], [4, 19, "jgillies"], [4, 19, "cclarkm"], [4, 19, "zakl14"], [4, 19, "dunnac11"], [5, 10, "kateg"], [5, 10, "rasikar"], [5, 10, "brooksmt"], [5, 10, "smganci"], [5, 11, "kateg"], [5, 11, "rasikar"], [5, 11, "tabathav"], [5, 11, "brooksmt"], [5, 11, "smganci"], [5, 12, "kateg"], [5, 12, "tabathav"], [5, 12, "cole15s"], [5, 12, "brooksmt"], [5, 12, "smganci"], [5, 13, "kateg"], [5, 13, "cara97"], [5, 13, "katwhy"], [5, 13, "tiaram"], [5, 13, "cole15s"], [5, 13, "brooksmt"], [5, 14, "cara97"], [5, 14, "johnjo8"], [5, 14, "perryh"], [5, 14, "katwhy"], [5, 14, "tiaram"], [5, 14, "cole15s"], [5, 14, "shanesp"], [5, 15, "johnjo8"], [5, 15, "perryh"], [5, 15, "mscruser"], [5, 15, "katwhy"], [5, 15, "tiaram"], [5, 15, "cole15s"], [5, 15, "shanesp"], [5, 15, "dunnac11"], [5, 16, "kateg"], [5, 16, "johnjo8"], [5, 16, "perryh"], [5, 16, "mscruser"], [5, 16, "katwhy"], [5, 16, "tiaram"], [5, 17, "kateg"], [5, 17, "codycody"], [5, 17, "johnjo8"], [5, 17, "perryh"], [5, 17, "mscruser"], [1, 10, "ihinks"], [2, 10, "zihe"]]}
   fetch('/api/api.cgi/schedule', {
    method: 'get'
   }).then(raw => {
    let json = raw.json()
    let s = json['Schedule']
    for (let i = 0; i < s.length; i++) {
      if (schedule[s[i][0]][s[i][1]] === undefined) {schedule[s[i][0]][s[i][1]] = []}
      schedule[s[i][0]][s[i][1]].push(s[i][2])
      console.log(s[i])
    }
    console.log(schedule)
    return schedule
   }).then(raw => {
    return [[[]]]
   })
   return []
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