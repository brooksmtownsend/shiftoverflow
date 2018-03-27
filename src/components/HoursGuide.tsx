import * as React from 'react'
import '../styles/ScheduleDay.css'

export class HoursGuide extends React.Component<{}, {}> {
    render() {
      return (
        <div>
          <Hour />
        </div>
      )
    }
}

class Hour extends React.Component {
    render() {
    const hours = ["10-11", "11-12","12-1","1-2","2-3","3-4","4-5","5-6","6-7","7-8"]
      return (
        <div >
          {hours.map((hour) =>
            <div id='sched_square' style={{width: 70, border: 'none', justifyContent: 'center', padding: 0, margin: 0}} key={hour}> {hour} </div>)
          }
        </div>
      );
    }

}