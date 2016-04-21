/**
 * Created by yang on 2016/3/24.
 */

require('../css/bootstrap.css');
require('../css/font-awesome.css');
require('../css/global.less');

var $ = require("jquery");
window.$ = window.jQuery = $;

require('angular');
//require('angular-route');
require('angular-resource');

require('angular-ui-router');
require('angular-ui-bootstrap');

var app = angular.module('app', ['ui.router','ngResource', 'ui.bootstrap']);

require('./filters/ApplyStatus.js');
require('./filters/ActivityExpiry.js');
require('./filters/ActivityUsed.js');
require('./controllers/ActivityCtrl.js');
require('./controllers/FeedCtrl.js');
require('./controllers/DatepickerCtrl.js');


app.config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("!");

    $stateProvider.state('activity', {
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

app.run(function($state, $log) {
    $state.go('activity');
    $log.debug('app.run ok');
});

angular.bootstrap(document, ['app']);
