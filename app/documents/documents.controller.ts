'use strict';

export default class DocumentController {

  total: number = 100;

  constructor() {
    console.log('DocumentController');
  }

  load() {
    console.log('loading documents!');
  }
}
