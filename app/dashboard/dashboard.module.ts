'use strict';

import * as angular        from 'angular';
//import CoreModule          from '../core/core.module';
//import DashboardRoutes     from './dashboard.routes';
import DashboardController from './dashboard.controller';

export default angular.module('app.documents', [
    //CoreModule.name
  ])

  // Config
  //.config(DashboardRoutes)

  // Controllers
  .controller('DashboardController', DashboardController)

  ;
