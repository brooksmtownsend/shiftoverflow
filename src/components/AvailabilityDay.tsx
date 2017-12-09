import * as React from 'react'
import { AvailabilitySquare, Day, Shift } from './AvailabilitySquare'
import '../styles/AvailabilityDay.css'

export class AvailabilityDay extends React.Component<{day: Day, onyen: string}, {}> {

  constructor(props: any) {
    super(props);
  }  

  render() {
    const day: Day = this.props.day;
    return (
      <div>
        <span id='dayLabel' > {day.slice(0, 3)} </span>
        <AvailabilitySquare day={day} shift={Shift.TenToEleven} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.ElevenToTwelve} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.TwelveToOne} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.OneToTwo} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.TwoToThree} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.ThreeToFour} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.FourToFive} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.FiveToSix} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.SixToSeven} onyen={this.props.onyen} />
        <AvailabilitySquare day={day} shift={Shift.SevenToEight} onyen={this.props.onyen} />
      </div>
    )
  }
}