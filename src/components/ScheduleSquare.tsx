import * as React from 'react'
import '../styles/ScheduleSquare.css'

export enum Shift {
    TenToEleven = "10-11",
    ElevenToTwelve = "11-12",
    TwelveToOne = "12-1",
    OneToTwo = "1-2",
    TwoToThree = "2-3",
    ThreeToFour = "3-4",
    FourToFive = "4-5",
    FiveToSix = "5-6",
    SixToSeven = "6-7",
    SevenToEight = "7-8"
  }

export class ScheduleSquare extends React.Component <{shift: Shift}, {style: {backgroundColor: string}}> {
    constructor(props: any) {
        super(props)

        this.state = { 
            style: {backgroundColor: 'white'}
          }
        }

        render() {
        return (
            <div id='sched_square' style={this.state.style}>

            {}
            </div>
        
        );
    }
}