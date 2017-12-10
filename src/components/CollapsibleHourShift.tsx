import * as React from 'react'
import { Collapsible, CollapsibleItem, Button } from 'react-materialize'

let weekday: Map<Number, String> = new Map<Number, String>();
weekday.set(0, 'Sunday');
weekday.set(1, 'Monday');
weekday.set(2, 'Tuesday');
weekday.set(3, 'Wednesday');
weekday.set(4, 'Thursday');
weekday.set(5, 'Friday');
weekday.set(6, 'Saturday');

export class CollapsibleHourShift extends React.Component<{d: Date}, {openall: Boolean}> {

    constructor(props: any) {
        super(props)
        this.state = {openall: false}
        this.open = this.open.bind(this);
    }
    

    render() {
        let today: String | undefined = weekday.get(this.props.d.getDay())
        let collapsibleHours: any[] = []
        let hours: String[] = ["TenToEleven", "ElevenToTwelve", "TwelveToOne",
                                "OneToTwo", "TwoToThree", "ThreeToFour",
                                "FourToFive", "FiveToSix", "SixToSeven", 
                                "SevenToEight"]

       

        if (today === "Sunday") {
            collapsibleHours = this.generateCollapsibleHourShifts(today, 5, 11, 2, "PM", hours)
        } else if (today === "Friday") {
            collapsibleHours = this.generateCollapsibleHourShifts(today, 8, 9, 0, "AM", hours)
        } else {
            collapsibleHours = this.generateCollapsibleHourShifts(today, 10, 9, 0, "AM", hours)
        }
      
    
        return (
            <div id="todayShifts"> {today}
             {<Button id='expand' onClick={(e) => this.open('true')}>Expand All</Button>}
                {collapsibleHours}
            </div>
        )
    }

    open(id: String) {
          // if expander is clicked and they aren't already expanded 
            // then set openall to true
          
      }

    generateCollapsibleHourShifts(today: String | undefined, numHours: number, 
                                  startHour: number, hoursIndex: number, 
                                  period: String, hours: String[]): any[] {
        let collapsibleHours: any[] = []
                                        
        for (let i: number = 0; i < numHours; i++) {
            let shift: String = this.getHourShiftString(today, startHour, hoursIndex, period, i);
            
            // tslint:disable-next-line:jsx-wrap-multiline
            collapsibleHours.push(<Collapsible id={hours[hoursIndex]} key={i}>
                                        <CollapsibleItem header={shift}>
                                        </CollapsibleItem>
                                    </Collapsible>)
            hoursIndex++
            startHour++
        }

        return collapsibleHours
    }

    getHourShiftString(today: String | undefined, startHour: number, hoursIndex: number, period: String, i: number): String {
        switch (today) {
            case "Sunday":
                if (i === 0) { return ++startHour + " PM -- " + ((startHour + 1) % 12) + " PM" }
                // tslint:disable-next-line:one-line
                else { return (++startHour % 12) + " PM -- " + ((startHour + 1) % 12) + " PM" }
            case "Friday":
                if (i === 1) {
                    return ++startHour + " " + period + " -- " + (startHour + 1) + " " + " PM"
                } else if (i < 2) {
                    return ++startHour + " " + period + " -- " + (startHour + 1) + " " + period
                } else {
                    period = "PM"
                    if (i === 2) { return ++startHour + " " + period + " -- " + ((startHour + 1) % 12) + " " + period }
                    else { return (++startHour % 12) + " " + period + " -- " + ((startHour + 1) % 12) + " " + period }
                }
            default:
                if (i === 2) {
                    return ++startHour + " " + period + " -- " + (startHour + 1) + " " + " PM"
                } else if (i < 2) {
                    return ++startHour + " " + period + " -- " + (startHour + 1) + " " + period
                } else {
                    period = "PM"
                    if (i === 2) { return ++startHour + " " + period + " -- " + ((startHour + 1) % 12) + " " + period }
                    else { return (++startHour % 12) + " " + period + " -- " + ((startHour + 1) % 12) + " " + period }
                }
        }
    }
}