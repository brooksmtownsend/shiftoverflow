import * as React from 'react'
import { AvailabilitySquare } from './AvailabilitySquare'
import '../styles/AvailabilityDay.css'

export class AvailabilityDay extends React.Component<{day: string}, {}> {

  render() {
    const day: string = this.props.day;
    return (
      <div>
        <span id='dayLabel' > {day.slice(0, 3)} </span>
        <AvailabilitySquare />
        <AvailabilitySquare />
        <AvailabilitySquare />
        <AvailabilitySquare />
        <AvailabilitySquare />
        <AvailabilitySquare />
        <AvailabilitySquare />
        <AvailabilitySquare />
        <AvailabilitySquare />
        <AvailabilitySquare />
      </div>
    )
  }
}