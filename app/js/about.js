/**
 * Created by yang on 2016/4/25.
 */
import angular from 'angular';
//import 'angular-route';
import 'angular-resource';

import 'angular-ui-router';
import 'angular-ui-bootstrap';

var app = angular.module('app', ['ui.router','ngResource', 'ui.bootstrap']);

app.run(($state, $log) => {
    $log.debug('app.run ok');
});

angular.bootstrap(document, ['app']);