import * as React from 'react'
import { Collapsible, CollapsibleItem } from 'react-materialize'

let weekday: Map<Number, String> = new Map<Number, String>();
weekday.set(0, 'Sunday');
weekday.set(1, 'Monday');
weekday.set(2, 'Tuesday');
weekday.set(3, 'Wednesday');
weekday.set(4, 'Thursday');
weekday.set(5, 'Friday');
weekday.set(6, 'Saturday');

export class CollapsibleHourShift extends React.Component<{d: Date}, {}> {

    constructor(props: any) {
        super(props)
    }

    render() {
        let today: String | undefined = weekday.get(this.props.d.getDay())
        
        return (
            <div id="todayShifts"> {today}
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

    mapHour(hour: number) {
        hour = hour > 12 ? (hour - 12) : hour
        return hour
    }
}