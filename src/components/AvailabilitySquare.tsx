import * as React from 'react'
import '../styles/AvailabilitySquare.css'

export enum Day {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday"
}

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

export class AvailabilitySquare extends React.Component<{day: Day, shift: Shift}, {isChecked: boolean, style: {backgroundColor: string}}> {

  constructor(props: any) {
    super(props)

    this.state = { 
      isChecked: false,
      style: {backgroundColor: 'white'}
    }

    this.changeAvailability = this.changeAvailability.bind(this);
  }

  render() {
    return (
      <div id='square' onClick={() => this.changeAvailability()} style={this.state.style}>
        {this.state.isChecked && <span className='squareSymbol'> ✓ </span>}
        {!this.state.isChecked && <span className='squareSymbol'> – </span>}
      </div>
    );
  }

  changeAvailability() {
    let color: string = ''
    if (this.state.style.backgroundColor === 'green') {
      color = 'red'
    } else {
      color = 'green'
    }
    this.setState({
      isChecked: !this.state.isChecked,
      style: {backgroundColor: color}
    })
  }
}