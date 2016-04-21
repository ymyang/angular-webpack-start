/**
 * Created by yang on 2016/3/25.
 */
angular.module('app').filter('activityExpiry', function() {

    return function(activity) {
        if (activity.expiryDate) {
            return activity.expiryDate;
        }
        return '激活后14天';
    };

});