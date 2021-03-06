"use strict";

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

let minutes = 0;

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].duration >= 120) {
    minutes = minutes + tasks[i].duration;
  }
}

let hours = minutes / 60;

let perHourSalary = 20;

let theWholeSalary = hours * perHourSalary;

console.log("Maartje worked for" + " " + hours.toFixed(2) + " " + "hours");
console.log("If Maartje earns:" + perHourSalary + "€ per hour");
console.log("Maartje has earned" + " " + theWholeSalary.toFixed(2) + " " + "€");