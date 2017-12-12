import * as React from 'react'
import { ScheduleSquare } from './ScheduleSquare'
import { ScheduleShift } from './Schedule'
import '../styles/ScheduleDay.css'
import { Day, Shift } from './Constants'

export class ScheduleDay extends React.Component<{day: Day, schedule: string[][], swap: () => void, selectShift: (s: ScheduleShift) => void}, {isLoading: boolean}> {

    constructor(props: any) {
      super(props)

      this.state = {
        isLoading: true
      }
    }

    componentWillMount() {
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      },         1000)
    }

    render() {
      return (
        <div>
          {!this.state.isLoading && <div>
          <ScheduleSquare day={this.props.day} shift={Shift.TenToEleven} onyens={this.props.schedule[10]} swap={this.props.swap} selectShift={this.props.selectShift} />
          <ScheduleSquare day={this.props.day} shift={Shift.ElevenToTwelve} onyens={this.props.schedule[11]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.TwelveToOne} onyens={this.props.schedule[12]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.OneToTwo} onyens={this.props.schedule[13]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.TwoToThree} onyens={this.props.schedule[14]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.ThreeToFour} onyens={this.props.schedule[15]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.FourToFive} onyens={this.props.schedule[16]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.FiveToSix} onyens={this.props.schedule[17]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.SixToSeven} onyens={this.props.schedule[18]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          <ScheduleSquare day={this.props.day} shift={Shift.SevenToEight} onyens={this.props.schedule[19]} swap={this.props.swap} selectShift={this.props.selectShift}/>
          </div>}
        </div>
      )
      }
}