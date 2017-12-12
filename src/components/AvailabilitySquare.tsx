import * as React from 'react'
import { Day, Shift } from './Constants'
import '../styles/AvailabilitySquare.css'

export class AvailabilitySquare extends React.Component<{day: Day, shift: Shift, preCheck: boolean, onyen: string, updateCounter: number}, {isChecked: boolean, style: {backgroundColor: string}}> {

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
    if (this.props.updateCounter != nextProps.updateCounter) {
      if (this.state.isChecked) {
        fetch('/api/api.cgi/availabilities/update/' + this.props.onyen + '/' + Day[this.props.day] + '/' + this.props.shift, {
          method: 'get'
        })
        .catch(err => console.log(err))
      } else {
        fetch('/api/api.cgi/availabilities/delete/' + this.props.onyen + '/' + Day[this.props.day] + '/' + this.props.shift, {
          method: 'get'
        })
        .catch(err => console.log(err))
      }
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