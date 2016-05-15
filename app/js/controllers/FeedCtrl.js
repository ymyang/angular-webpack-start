/**
 * Created by yang on 2016/3/24.
 */

export default class FeedCtrl {

    constructor($scope, $resource, $log) {
        'ngInject';

        this.$scope = $scope;

        this.Feed = $resource('/apps/feed', undefined, {
            save: {method: 'PUT'}
        });
        this.FeedList = $resource('/apps/feed/list');

        this.$scope.list = [];

        this._getList();
    }

    _getList() {
        this.FeedList.get((body) => {
            this.$scope.list = body.data.list;
        });
    }
}
