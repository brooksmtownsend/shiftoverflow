import * as React from 'react'
import { ScheduleSquare } from './ScheduleSquare'
import '../styles/ScheduleDay.css'
import { Day, Shift } from './Constants'

export class ScheduleDay extends React.Component<{day: Day, schedule: any[]}, {}> {
    render() {
      const schedule = this.props.schedule
      return (
        <div>
          <ScheduleSquare day={this.props.day} shift={Shift.TenToEleven} onyens={schedule[10].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.ElevenToTwelve} onyens={schedule[11].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.TwelveToOne} onyens={schedule[12].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.OneToTwo} onyens={schedule[13].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.TwoToThree} onyens={schedule[14].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.ThreeToFour} onyens={schedule[15].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.FourToFive} onyens={schedule[16].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.FiveToSix} onyens={schedule[17].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.SixToSeven} onyens={schedule[18].onyens} />
          <ScheduleSquare day={this.props.day} shift={Shift.SevenToEight} onyens={schedule[19].onyens} />
        </div>
      )
      }
}