import * as React from 'react'
import { Day, Shift } from './Constants'
import '../styles/AvailabilitySquare.css'

export class AvailabilitySquare extends React.Component<{day: Day, shift: Shift, preCheck: boolean}, {isChecked: boolean, style: {backgroundColor: string}}> {

  constructor(props: any) {
    super(props)

    this.state = { 
      isChecked: false,
      style: {backgroundColor: 'white'}
    }

    this.changeAvailability = this.changeAvailability.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.preCheck != nextProps.preCheck) {
      this.setState({isChecked: nextProps.preCheck, style: {backgroundColor: nextProps.preCheck? 'green':'white'}})
    }
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