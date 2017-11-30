import * as React from 'react'
import { ScheduleSquare } from './ScheduleSquare'
import '../styles/ScheduleDay.css'

export class ScheduleDay extends React.Component<{day: string}, {}> {
    render() {
        const day: string = this.props.day;
        return (
          <div>
            <span id='sdayLabel' > {day.slice(0, 3)} </span>
            <ScheduleSquare />
            <ScheduleSquare />
            <ScheduleSquare />
            <ScheduleSquare />
            <ScheduleSquare />
            <ScheduleSquare />
            <ScheduleSquare />
          </div>
        )
      }
}