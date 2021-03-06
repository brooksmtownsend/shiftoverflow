import * as React from 'react'
import { AvailabilitySquare } from './AvailabilitySquare'
import { Day, Shift } from './Constants'
import '../styles/AvailabilityDay.css'

export class AvailabilityDay extends React.Component<{availabilities: Array<string>, day: Day, onyen: string, updateCounter: number}, {}> {

  constructor(props: any) {
    super(props);
  }  

  render() {
    const day: Day = this.props.day;
    return (
      <div>
        <span id='dayLabel' > {day.slice(0, 3)} </span>
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.TenToEleven} preCheck={this.props.availabilities.indexOf(Shift.TenToEleven) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.ElevenToTwelve} preCheck={this.props.availabilities.indexOf(Shift.ElevenToTwelve) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.TwelveToOne} preCheck={this.props.availabilities.indexOf(Shift.TwelveToOne) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.OneToTwo} preCheck={this.props.availabilities.indexOf(Shift.OneToTwo) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.TwoToThree} preCheck={this.props.availabilities.indexOf(Shift.TwoToThree) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.ThreeToFour} preCheck={this.props.availabilities.indexOf(Shift.ThreeToFour) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.FourToFive} preCheck={this.props.availabilities.indexOf(Shift.FourToFive) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.FiveToSix} preCheck={this.props.availabilities.indexOf(Shift.FiveToSix) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.SixToSeven} preCheck={this.props.availabilities.indexOf(Shift.SixToSeven) > -1} />
        <AvailabilitySquare day={day} onyen = {this.props.onyen} updateCounter = {this.props.updateCounter} shift={Shift.SevenToEight} preCheck={this.props.availabilities.indexOf(Shift.SevenToEight) > -1} />
      </div>
    )
  }
}