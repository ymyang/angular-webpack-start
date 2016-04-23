/**
 * Created by yang on 2016/3/24.
 */

export default class ActivityCtrl {

    constructor($scope, $filter, $resource, $uibModal, $log) {
        'ngInject';

        this.$scope = $scope;

        this.Activity = $resource('/apps/activity', undefined, {
            save: {method: 'PUT'}
        });
        this.ActivityList = $resource('/apps/activity/list');

        this.$scope.list = [];

        this._getList();

        this.$scope.openDatepicker = (activity) => {
            $uibModal.open({
                template: require('../tpls/datepicker.html'),
                animation: true,
                keyboard: true,
                backdrop: true,
                controller: 'DatepickerCtrl',
                resolve: {
                    model: () => activity
                },
                size: 'sm'
            }).closed.then(() => {
                    $log.debug('ActivityCtrl expiryDate:', activity.expiryDate);
                    activity.expiryDate = $filter('date')(activity.expiryDate, 'yyyy-MM-dd');
                    this._updateExpireDate(activity);
                });
        }

    }

    _getList() {
        this.ActivityList.get((body) => {
            this.$scope.list = body.data.list;
        });
    }

    _updateExpireDate(activity) {
        this.Activity.save({
            activityCode: activity.activityCode,
            expiryDate: activity.expiryDate,
            vip: activity.vip
        }, () => {
            //_getList();
        });
    }
}
