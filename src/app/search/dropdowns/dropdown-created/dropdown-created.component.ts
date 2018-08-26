import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-created',
  templateUrl: './dropdown-created.component.html',
  styleUrls: ['./dropdown-created.component.sass']
})
export class DropdownCreatedComponent implements OnInit {
  months = [
    {
      'monthName': 'August',
      'year': 2018,
      'monthDays': 31,
      'lastMonthDays': 31,
      'firstDayIndex': 3,
      'selectedDayFrom': 11,
      'selectedDayTo': 15
    },
    {
      'monthName': 'September',
      'year': 2018,
      'monthDays': 30,
      'lastMonthDays': 31,
      'firstDayIndex': 6,
      'selectedDayFrom': 12,
      'selectedDayTo': 15
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getArrayLastMonth(num, lastMonthDays) {
    let arr = [];
    let days = lastMonthDays;
    for (let g = 0; g < num; g++) {
      arr.unshift(days);
      days -= 1;
    }
    return arr;
  }

  getArrayNumbers(num) {
    let arr = [];
    for (let g = 1; g < num; g++) {
      arr.push(g);
    }
    return arr;
  }

  getArrayNextMonth(firstDayIndex, lastMonthDays, currentMonthDays) {
    let arr = [];
    let lastMonthDaysNum = this.getArrayLastMonth(firstDayIndex, lastMonthDays).length;
    let currentMonthDaysNum = this.getArrayNumbers(currentMonthDays).length;
    let lastAndCurrentDays = lastMonthDaysNum + currentMonthDaysNum;
    let rows = Math.ceil((lastAndCurrentDays) / 7);
    let allDays = rows * 7;
    let nextMonthNum = allDays - lastAndCurrentDays;
    arr = this.getArrayNumbers(nextMonthNum + 1);
    return arr;
  }

}
