'use strict';

export default class DashboardController {

  widgets: number = 10;

  constructor() {
    console.log('DashboardController');
  }

  load() {
    console.log('loading widgets!');
    this.widgets = Math.random();
  }
}
