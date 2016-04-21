/**
 * Created by yang on 2016/3/25.
 */
angular.module('app').controller('DatepickerCtrl', function($scope, $uibModalInstance, model) {

    $scope.model = model;

    $scope.inlineOptions = {
        formatMonth: 'MM',
        customClass: _getDayClass,
        minDate: new Date(),
        showWeeks: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function _getDayClass(data) {
        var date = data.date;
        var mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

});