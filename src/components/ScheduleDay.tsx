import * as React from 'react'
import { ScheduleSquare, Shift } from './ScheduleSquare'
import '../styles/ScheduleDay.css'

export class ScheduleDay extends React.Component<{day: string}, {}> {
    render() {
        const day: string = this.props.day;
        return (
          <div>
            <span id='sdayLabel' > {day.slice(0, 3)} </span>
            <ScheduleSquare shift={Shift.TenToEleven}/>
            <ScheduleSquare shift={Shift.ElevenToTwelve}/>
            <ScheduleSquare shift={Shift.TwelveToOne}/>
            <ScheduleSquare shift={Shift.OneToTwo}/>
            <ScheduleSquare shift={Shift.TwoToThree}/>
            <ScheduleSquare shift={Shift.ThreeToFour}/>
            <ScheduleSquare shift={Shift.FourToFive}/>
            <ScheduleSquare shift={Shift.FiveToSix}/>
            <ScheduleSquare shift={Shift.SixToSeven}/>
            <ScheduleSquare shift={Shift.SevenToEight}/>
          </div>
        )
      }
}