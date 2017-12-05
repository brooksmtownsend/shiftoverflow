import * as React from 'react'
import { AvailabilitySquare, Day, Shift } from './AvailabilitySquare'
import '../styles/AvailabilityDay.css'

export class AvailabilityDay extends React.Component<{day: Day}, {}> {

  render() {
    const day: Day = this.props.day;
    return (
      <div>
        <span id='dayLabel' > {day.slice(0, 3)} </span>
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
      </div>
    )
  }
}