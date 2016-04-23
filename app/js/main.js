/**
 * Created by yang on 2016/3/24.
 */

import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/global.less';

import $ from 'jquery';
window.$ = window.jQuery = $;

import angular from 'angular';
//import 'angular-route';
import 'angular-resource';

import 'angular-ui-router';
import 'angular-ui-bootstrap';

import ApplyStatus from './filters/ApplyStatus';
import ActivityExpiry from './filters/ActivityExpiry';
import ActivityUsed from './filters/ActivityUsed';
import ActiveCtrl from './controllers/ActiveCtrl';
import ApplyCtrl from './controllers/ApplyCtrl';
import ActivityCtrl from './controllers/ActivityCtrl';
import FeedCtrl from './controllers/FeedCtrl';
import DatepickerCtrl from './controllers/DatepickerCtrl';

let app = angular.module('app', ['ui.router','ngResource', 'ui.bootstrap']);

app.filter('applyStatus', ApplyStatus);
app.filter('activityExpiry', ActivityExpiry);
app.filter('activityUsed', ActivityUsed);

app.controller('ActiveCtrl', ActiveCtrl);
app.controller('ApplyCtrl', ApplyCtrl);
app.controller('ActivityCtrl', ActivityCtrl);
app.controller('FeedCtrl', FeedCtrl);
app.controller('DatepickerCtrl', DatepickerCtrl);


app.config(($locationProvider, $stateProvider) => {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("!");

    $stateProvider.state('apply', {
        url: 'apply',
        template: require('./tpls/apply.html'),
        controller: 'ApplyCtrl'
    }).state('active', {
        url: 'active',
        template: require('./tpls/active.html'),
        controller: 'ActiveCtrl'
    }).state('activity', {
        url: 'activity',
        template: require('./tpls/activity.html'),
        controller: 'ActivityCtrl'
    }).state('feed', {
        url: 'feed',
        template: require('./tpls/feed.html'),
        controller: 'FeedCtrl'
    });

    console.log('app.config ok');

});

app.run(($state, $log) => {
    $state.go('apply');
    $log.debug('app.run ok');
});

angular.bootstrap(document, ['app']);
