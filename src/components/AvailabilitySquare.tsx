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
  TenToEleven = "10:00am-11:00am",
  ElevenToTwelve = "11:00am-12:00pm",
  TwelveToOne = "12:00pm-1:00pm",
  OneToTwo = "1:00pm-2:00pm",
  TwoToThree = "2:00pm-3:00pm",
  ThreeToFour = "3:00pm-4:00pm",
  FourToFive = "4:00pm-5:00pm",
  FiveToSix = "5:00pm-6:00pm",
  SixToSeven = "6:00pm-7:00pm",
  SevenToEight = "7:00pm-8:00pm"
}

export class AvailabilitySquare extends React.Component<{day: Day, shift: Shift, onyen: string}, {isChecked: boolean, style: {backgroundColor: string}}> {

  constructor(props: any) {
    super(props)

    this.state = { 
      isChecked: false,
      style: {backgroundColor: 'white'}
    }

    this.changeAvailability = this.changeAvailability.bind(this);
  }

  componentDidMount() {
    fetch('/api/api.cgi/availabilities/' + this.props.onyen + '/' + Day[this.props.day] + '/' + this.props.shift, {
      method: 'get'
    })
    .then(response => response.json())
    .then(jsonData => {
      if (jsonData.length != 0) {
        this.setState({isChecked: true, style: {backgroundColor: 'green'}})
      }
    })
    .catch(err => console.log(err))
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