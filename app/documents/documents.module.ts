'use strict';

import * as angular       from 'angular';
import DocumentController from './documents.controller';

export default angular.module('app.documents', [
    //CoreModule.name
  ])

  // Config
  //.config(DocumentRoutes)

  // Controllers
  .controller('DocumentController', DocumentController)

  ;
