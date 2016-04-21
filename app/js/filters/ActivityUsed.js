/**
 * Created by yang on 2016/3/25.
 */
angular.module('app').filter('activityUsed', function() {

    return function(activity) {
        if (activity.used) {
            return '已使用';
        }
        return '未使用';
    };

});