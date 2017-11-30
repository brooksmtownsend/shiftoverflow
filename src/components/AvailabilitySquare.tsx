import * as React from 'react'
import '../styles/AvailabilitySquare.css'

// enum Day {
//   Sunday = "Sunday",
//   Monday = "Monday",
//   Tuesday = "Tuesday",
//   Wednesday = "Wednesday",
//   Thursday = "Thursday",
//   Friday = "Friday"
// }

// enum Shift {
//   // Put things here
// }

export class AvailabilitySquare extends React.Component<{}, {isChecked: boolean, style: {backgroundColor: string}}> {

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