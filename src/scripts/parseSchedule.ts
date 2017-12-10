let schedule: JSON = require('../data/currentSchedule.json')

let shifts: any[] = schedule.parse('shifts')
let days: any[] = [];

for (let i = 0; i < shifts.length; i++) {
  days[0] = shifts[0]
}

for (let i = 0; i < days.length; i++) {
  for (let j = 0; j < days[0].length; j++) {
    console.log(days[0].day)
    console.log(days[0].hour)
    console.log(days[0].onyens)
  }
}