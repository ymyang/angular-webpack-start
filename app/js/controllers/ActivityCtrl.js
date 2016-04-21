/**
 * Created by yang on 2016/3/24.
 */
angular.module('app').controller('ActivityCtrl', function($scope, $filter, $resource, $uibModal, $log) {

    $scope.list = [];

    _getList();

    function _getList() {
        $scope.list = [
            {
                activityCode: 'asdef',
                expiryDate: '2016-05-06'
            }
        ];
    }

    function _updateExpireDate(activity) {
        // TODO
    }

    $scope.openDatepicker = function(activity) {
        $uibModal.open({
            template: require('../tpls/datepicker.html'),
            animation: true,
            keyboard: true,
            backdrop: true,
            controller: 'DatepickerCtrl',
            resolve: {
                model: function() {
                    return activity
                }
            },
            size: 'sm'
        }).closed.then(function() {
                $log.debug('ActiveCtrl expiryDate:', activity.expiryDate);
                lic.expiryDate = $filter('date')(activity.expiryDate, 'yyyy-MM-dd');
                _updateExpireDate(activity);
            });
    }

});