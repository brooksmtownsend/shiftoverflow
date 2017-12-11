import * as React from 'react'
import { Collapsible, CollapsibleItem, Button } from 'react-materialize'
import { Day, Shift } from './Constants'

let weekday: Map<Number, String> = new Map<Number, String>();
weekday.set(0, Day.Sunday);
weekday.set(1, Day.Monday);
weekday.set(2, Day.Tuesday);
weekday.set(3, Day.Wednesday);
weekday.set(4, Day.Thursday);
weekday.set(5, Day.Friday);
weekday.set(6, Day.Saturday);

export class CollapsibleHourShift extends React.Component<{d: Date}, {isopen: Boolean}> {

    constructor(props: any) {
        super(props)
        this.state = {isopen: false}
        this.open= this.open.bind(this);
    }
    
    render() {
        let today: String | undefined = weekday.get(this.props.d.getDay())
        today = "Monday"
        let collapsibleHours: any[] = []

        if (today === "Sunday") {
            collapsibleHours = this.generateCollapsibleHourShifts(today, "PM")
        } else if (today === "Friday") {
            collapsibleHours = this.generateCollapsibleHourShifts(today, "AM")
        } else {
            collapsibleHours = this.generateCollapsibleHourShifts(today, "AM")
        }
    
        return (
            <div id="todayShifts"> {today} 
                {<Button id='expand' onClick={(e) => this.open(e.target.id)}>Expand All</Button>}    
                {collapsibleHours}
            </div>
        )
    }

// we are changing the properties of the collapsibles to open on click expand all
    open(id: String) {
    this.setState({isopen: !this.state.isopen}) ;
    if (id === 'expand' && !this.state.isopen) {
       // this.setState({isopen: true})
        (document.getElementById('expand') as HTMLElement).innerText = "Close All" ;
        let collapsible = document.getElementsByClassName('collapsible-header');
        for (let i = 0; i < collapsible.length; i++) {
        collapsible[i].className += " active";
      }

        let lis = document.getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
        lis[i].className += ' active'
      }
// we had to cast bodys as an HTMLCollection of elements to fix the style error
        let bodys: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('collapsible-body') as HTMLCollectionOf<HTMLElement>;
        for( let i = 0; i < bodys.length; i++) {
          bodys[i].style.display = 'block'
      }
    } else {
    // cast as html element b/c we are ensuring that whatever we get back wont be null
        (document.getElementById('expand') as HTMLElement).innerText = "Expand All" ;
        let collapsible = document.getElementsByClassName('collapsible-header');
        for (let i = 0; i < collapsible.length; i++) {
          collapsible[i].className += "";
        }
  
        let lis = document.getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
          lis[i].className += ''
        }
  // we had to cast bodys as an HTMLCollection of elements to fix the style error
        let bodys: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('collapsible-body') as HTMLCollectionOf<HTMLElement>;
        for( let i = 0; i < bodys.length; i++) {
          bodys[i].style.display = 'none'
        }
    }
      }

    generateCollapsibleHourShifts(today: String | undefined, period: String): any[] {
      let collapsibleHours: any[] = []
      let i = 0;
      for (let item in Shift) {
        let hours = Shift[item].split('-');
        let shift: String = this.getHourShiftString(today, Number(hours[0]) - 1, period, i);
        if (!(today === Day.Sunday && (i < 2 || i > 6) || today === Day.Friday && i > 7)) {
          collapsibleHours.push(<Collapsible id={shift} key={i}>
                                      <CollapsibleItem header={shift}>
                                      </CollapsibleItem>
                                  </Collapsible>)
        }
        i++
      }
      return collapsibleHours
    }

    getHourShiftString(today: String | undefined, startHour: number, period: String, i: number): String {
      switch (today) {
          case "Sunday":
              if (i === 2) { return ++startHour + " PM -- " + ((startHour + 1) % 12) + " PM" }
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
              if (i === 1) {
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