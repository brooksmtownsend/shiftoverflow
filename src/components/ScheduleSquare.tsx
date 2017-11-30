import * as React from 'react'
import '../styles/ScheduleSquare.css'

export class ScheduleSquare extends React.Component <{}, {style: {backgroundColor: string}}> {
    constructor(props: any) {
        super(props)

        this.state = { 
            style: {backgroundColor: 'grey'}
          }
        }

        render() {
        return (
            <div id='sched_square'>
            {}
            </div>
        
        );
    }
}