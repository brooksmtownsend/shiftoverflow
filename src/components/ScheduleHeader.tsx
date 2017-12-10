import * as React from 'react'
import '../styles/ScheduleDay.css'
import '../styles/ScheduleHeader.css'
import { Day } from './Constants'

export class ScheduleHeader extends React.Component {
    render() {
        return (
          <div id='scheduleHeader'>
            <div className='sdayLabel color'> {Day.Sunday} </div>
            <div className='sdayLabel '> {Day.Monday} </div>
            <div className='sdayLabel color'> {Day.Tuesday} </div>
            <div className='sdayLabel '> {Day.Wednesday} </div>
            <div className='sdayLabel color'> {Day.Thursday} </div>
            <div className='sdayLabel '> {Day.Friday} </div>
          </div>
        )
      }
}