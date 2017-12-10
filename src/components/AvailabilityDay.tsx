import * as React from 'react'
import { AvailabilitySquare } from './AvailabilitySquare'
import { Day, Shift } from './Constants'
import '../styles/AvailabilityDay.css'

export class AvailabilityDay extends React.Component<{day: Day, onyen: string}, {}> {

  constructor(props: any) {
    super(props);
  }  

  render() {
    const day: Day = this.props.day;
    return (
      <div>
<<<<<<< HEAD
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
=======
        <span id='dayLabel' > {day.slice(0, 2)} </span>
        <AvailabilitySquare day={day} shift={Shift.TenToEleven} />
        <AvailabilitySquare day={day} shift={Shift.ElevenToTwelve}/>
        <AvailabilitySquare day={day} shift={Shift.TwelveToOne}/>
        <AvailabilitySquare day={day} shift={Shift.OneToTwo}/>
        <AvailabilitySquare day={day} shift={Shift.TwoToThree}/>
        <AvailabilitySquare day={day} shift={Shift.ThreeToFour}/>
        <AvailabilitySquare day={day} shift={Shift.FourToFive}/>
        <AvailabilitySquare day={day} shift={Shift.FiveToSix}/>
        <AvailabilitySquare day={day} shift={Shift.SixToSeven}/>
        <AvailabilitySquare day={day} shift={Shift.SevenToEight}/>
>>>>>>> develop
      </div>
    )
  }
}