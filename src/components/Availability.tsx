import * as React from 'react'
import { AvailabilityDay } from './AvailabilityDay'
import { Day } from './Constants'

export class Availability extends React.Component<{}, {availabilities: Array<Array<string>>, onyen: string, submitOnyen: string}> {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {availabilities: [], onyen: "", submitOnyen: ""};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitOnyen: this.state.onyen});
    fetch('/api/api.cgi/availabilities/' + this.state.onyen, {
      method: 'get'
    })
    .then(response => response.json())
    .then(jsonData => {
      this.setState({availabilities: jsonData});
    })
    .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({onyen: e.target.value});
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
              <label>
                Enter onyen:
                <input type="text" value={this.state.onyen} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" className="btn"/>
              <input type="submit" value="Commit New Changes" className="btn"/>
          </form>
        </div>
        <div className='leftSide'>
          <AvailabilityDay day={Day.Sunday} availabilities={this.state.availabilities.filter(elem => {return elem[0] == 'Sunday';}).map(elem => {return elem[1]})}/>
          <AvailabilityDay day={Day.Monday} availabilities={this.state.availabilities.filter(elem => {return elem[0] == 'Monday';}).map(elem => {return elem[1]})}/>
          <AvailabilityDay day={Day.Tuesday} availabilities={this.state.availabilities.filter(elem => {return elem[0] == 'Tuesday';}).map(elem => {return elem[1]})}/>
          <AvailabilityDay day={Day.Wednesday} availabilities={this.state.availabilities.filter(elem => {return elem[0] == 'Wednesday';}).map(elem => {return elem[1]})}/>
          <AvailabilityDay day={Day.Thursday} availabilities={this.state.availabilities.filter(elem => {return elem[0] == 'Thursday';}).map(elem => {return elem[1]})}/>
          <AvailabilityDay day={Day.Friday} availabilities={this.state.availabilities.filter(elem => {return elem[0] == 'Friday';}).map(elem => {return elem[1]})}/>
        </div>
      </div>
    )
  }

}