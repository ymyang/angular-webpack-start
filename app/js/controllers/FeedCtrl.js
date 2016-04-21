/**
 * Created by yang on 2016/3/24.
 */
angular.module('app').controller('FeedCtrl', function($scope, $resource, $log) {

    $scope.list = [];

    _getList();

    function _getList() {
        $scope.list = [
            {
                feedId: 123,
                company: '测试',
                feedTime: new Date(),
                content: '测试测试'
            }
        ];
    }

});