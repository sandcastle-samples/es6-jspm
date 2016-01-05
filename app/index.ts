'use strict';

import * as angular from 'angular';
import 'angular-ui-router';
import 'vendor';

import Router          from './router';
//import CoreModule      from './core/core.module';
import DashboardModule from './dashboard/dashboard.module';
import DocumentModule  from './documents/documents.module';

angular.module('app', [
    //CoreModule.name,
    DashboardModule.name,
    DocumentModule.name,
    'ui.router'
  ])

  // Config
  .config(Router);

angular.element(document).ready(function() {
  angular.bootstrap(document.body, ['app'], {
    // strictDi: true
  });
});
