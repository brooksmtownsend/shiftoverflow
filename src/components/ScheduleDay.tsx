import * as React from 'react'
import { ScheduleSquare } from './ScheduleSquare'
import { ScheduleShift } from './Schedule'
import '../styles/ScheduleDay.css'
import { Day, Shift } from './Constants'

export class ScheduleDay extends React.Component<{day: Day, schedule: any[], swap: () => void, selectShift: (s: ScheduleShift) => void}, {}> {
    render() {
      const schedule = this.props.schedule
      return (
        <div>
          <ScheduleSquare day={this.props.day} shift={Shift.TenToEleven} onyens={schedule[10]} swap={this.props.swap} selectShift={this.props.selectShift} />
          <ScheduleSquare day={this.props.day} shift={Shift.ElevenToTwelve} onyens={schedule[11]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.TwelveToOne} onyens={schedule[12]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.OneToTwo} onyens={schedule[13]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.TwoToThree} onyens={schedule[14]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.ThreeToFour} onyens={schedule[15]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.FourToFive} onyens={schedule[16]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.FiveToSix} onyens={schedule[17]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.SixToSeven} onyens={schedule[18]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.SevenToEight} onyens={schedule[19]} swap={this.props.swap} selectShift={this.props.selectShift}/>
        </div>
      )
      }
}