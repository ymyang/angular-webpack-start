/**
 * Created by yang on 2016/3/24.
 */

export default class FeedCtrl {

    constructor($scope, $resource, $log) {
        'ngInject';

        this.$scope = $scope;

        this.Feed = $resource('/site/feed', undefined, {
            save: {method: 'PUT'}
        });
        this.FeedList = $resource('/site/feed/list');

        this.$scope.list = [];

        this._getList();
    }

    _getList() {
        this.FeedList.get((body) => {
            this.$scope.list = body.data.list;
        });
    }
}
