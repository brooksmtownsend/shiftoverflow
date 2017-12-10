import * as React from 'react'
import { ScheduleSquare } from './ScheduleSquare'
import '../styles/ScheduleDay.css'
import { Day, Shift } from './Constants'

export class ScheduleDay extends React.Component<{day: Day}, {}> {
    render() {
      return (
        <div>
          <ScheduleSquare day={this.props.day} shift={Shift.TenToEleven}/>
          <ScheduleSquare day={this.props.day} shift={Shift.ElevenToTwelve}/>
          <ScheduleSquare day={this.props.day} shift={Shift.TwelveToOne}/>
          <ScheduleSquare day={this.props.day} shift={Shift.OneToTwo}/>
          <ScheduleSquare day={this.props.day} shift={Shift.TwoToThree}/>
          <ScheduleSquare day={this.props.day} shift={Shift.ThreeToFour}/>
          <ScheduleSquare day={this.props.day} shift={Shift.FourToFive}/>
          <ScheduleSquare day={this.props.day} shift={Shift.FiveToSix}/>
          <ScheduleSquare day={this.props.day} shift={Shift.SixToSeven}/>
          <ScheduleSquare day={this.props.day} shift={Shift.SevenToEight}/>
        </div>
      )
      }
}