'use strict';

import DashboardController from './dashboard/dashboard.controller';
import DocumentController from './documents/documents.controller';

export default function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      controller: DashboardController,
      controllerAs: 'dash',
      template: '<h1>Dashboard</h1><div>{{dash.widgets}}</div>'
    })
    .state('documents', {
      url: '/documents',
      controller: DocumentController,
      controllerAs: 'docs',
      template: '<h1>Documents</h1><div>{{docs.total}}</div><p><a ui-sref="dashboard">Back to dashboard</a></p>'
    });

  $urlRouterProvider
    .otherwise('/dashboard');
}
