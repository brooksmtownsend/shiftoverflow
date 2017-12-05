import * as React from 'react'
import { Day } from './AvailabilitySquare'
import { Collapsible, CollapsibleItem } from 'react-materialize'

export class CollapsibleHourShift extends React.Component<{day: Day}> {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div id="todayShifts"> 
                <Collapsible class="shiftHour">
                    <CollapsibleItem header="10AM - 11AM">
                        <ul>
                            <li>Helen Qin</li>
                            <li>Brooks Townsend</li>
                            <li>Brooke Canter</li>
                        </ul>
                    </CollapsibleItem>
                </Collapsible>
                <Collapsible>
                    <CollapsibleItem header="11AM - 12PM">
                        <ul>
                            <li>Helen Qin</li>
                            <li>Brooks Townsend</li>
                            <li>Brooke Canter</li>
                        </ul>
                    </CollapsibleItem>
                </Collapsible>
                <Collapsible>
                    <CollapsibleItem header="12PM - 1PM">
                        <ul>
                            <li>Helen Qin</li>
                            <li>Brooks Townsend</li>
                            <li>Brooke Canter</li>
                        </ul>
                    </CollapsibleItem>
                </Collapsible>
                <Collapsible>
                    <CollapsibleItem header="1PM - 2PM">
                        <ul>
                            <li>Helen Qin</li>
                            <li>Brooks Townsend</li>
                            <li>Brooke Canter</li>
                        </ul>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        )
    }
}