import * as React from 'react'
import { AvailabilityDay } from './AvailabilityDay'
import { Day } from './AvailabilitySquare'

export class Availability extends React.Component<{}, {}> {

  render() {
    return (
      <div className='leftSide'>
        <AvailabilityDay day={Day.Sunday} onyen={'brookebc'}/>
        <AvailabilityDay day={Day.Monday} onyen={'brookebc'}/>
        <AvailabilityDay day={Day.Tuesday} onyen={'brookebc'}/>
        <AvailabilityDay day={Day.Wednesday} onyen={'brookebc'}/>
        <AvailabilityDay day={Day.Thursday} onyen={'brookebc'}/>
        <AvailabilityDay day={Day.Friday} onyen={'brookebc'}/>
      </div>
    )
  }

}