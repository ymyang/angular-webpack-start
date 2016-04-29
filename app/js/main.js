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
import ActivityCtrl from './controllers/ActivityCtrl';
import FeedCtrl from './controllers/FeedCtrl';
import DatepickerCtrl from './controllers/DatepickerCtrl';

import activityTpl from './tpls/activity.html';
import feedTpl from './tpls/feed.html';

let app = angular.module('app', ['ui.router','ngResource', 'ui.bootstrap']);

app.filter('applyStatus', ApplyStatus);
app.filter('activityExpiry', ActivityExpiry);
app.filter('activityUsed', ActivityUsed);

app.controller('ActivityCtrl', ActivityCtrl);
app.controller('FeedCtrl', FeedCtrl);
app.controller('DatepickerCtrl', DatepickerCtrl);

app.config(($locationProvider, $stateProvider) => {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("!");

    $stateProvider.state('activity', {
        url: 'activity',
        template: activityTpl,
        controller: 'ActivityCtrl'
    }).state('feed', {
        url: 'feed',
        template: feedTpl,
        controller: 'FeedCtrl'
    });

    console.log('app.config ok');

});

app.run(($state, $log) => {
    $state.go('activity');
    $log.debug('app.run ok');
});

angular.bootstrap(document, ['app']);
