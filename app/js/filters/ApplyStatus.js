/**
 * Created by yang on 2016/3/25.
 */
angular.module('app').filter('applyStatus', function() {

    return function(apply) {
        if (apply.applyStatus == '1') {
            return '已处理';
        }
        return '等待处理';
    };

});