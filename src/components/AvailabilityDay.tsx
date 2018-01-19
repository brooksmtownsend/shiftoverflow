import * as React from 'react'
import { AvailabilitySquare } from './AvailabilitySquare'
import { Day, Shift } from './Constants'
import '../styles/AvailabilityDay.css'

export class AvailabilityDay extends React.Component<{availabilities: Array<string>, day: Day}, {}> {

  constructor(props: any) {
    super(props);
  }  

  render() {
    const day: Day = this.props.day;
    return (
      <div>
<<<<<<< HEAD
        <span id='dayLabel' > {day.slice(0, 2)} </span>
        <span id='times'>hmmmmm {} </span>
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
=======
        <span id='dayLabel' > {day.slice(0, 3)} </span>
        <AvailabilitySquare day={day} shift={Shift.TenToEleven} preCheck={this.props.availabilities.indexOf(Shift.TenToEleven) > -1} />
        <AvailabilitySquare day={day} shift={Shift.ElevenToTwelve} preCheck={this.props.availabilities.indexOf(Shift.ElevenToTwelve) > -1} />
        <AvailabilitySquare day={day} shift={Shift.TwelveToOne} preCheck={this.props.availabilities.indexOf(Shift.TwelveToOne) > -1} />
        <AvailabilitySquare day={day} shift={Shift.OneToTwo} preCheck={this.props.availabilities.indexOf(Shift.OneToTwo) > -1} />
        <AvailabilitySquare day={day} shift={Shift.TwoToThree} preCheck={this.props.availabilities.indexOf(Shift.TwoToThree) > -1} />
        <AvailabilitySquare day={day} shift={Shift.ThreeToFour} preCheck={this.props.availabilities.indexOf(Shift.ThreeToFour) > -1} />
        <AvailabilitySquare day={day} shift={Shift.FourToFive} preCheck={this.props.availabilities.indexOf(Shift.FourToFive) > -1} />
        <AvailabilitySquare day={day} shift={Shift.FiveToSix} preCheck={this.props.availabilities.indexOf(Shift.FiveToSix) > -1} />
        <AvailabilitySquare day={day} shift={Shift.SixToSeven} preCheck={this.props.availabilities.indexOf(Shift.SixToSeven) > -1} />
        <AvailabilitySquare day={day} shift={Shift.SevenToEight} preCheck={this.props.availabilities.indexOf(Shift.SevenToEight) > -1} />
>>>>>>> cb319d9684374328c59e0b9e3f8bf6471d767d88
      </div>
    )
  }
}