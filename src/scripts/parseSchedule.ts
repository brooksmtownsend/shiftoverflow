let schedule: JSON = require('../data/currentSchedule.json')

let shifts: any[] = schedule['shifts'] 
let days: any[] = [];

for (let i = 0; i < shifts.length; i++) {
  console.log(shifts[0])
  days[0] = shifts[0]
}

for (let i = 0; i < days.length; i++) {
  for (let j = 0; j < days[i].length; j++) {
    console.log(days[i][j].day)
    console.log(days[i][j].hour)
    console.log(days[i][j].onyens)
  }
}