/**
 * Created by yang on 2016/3/25.
 */

export default class DatepickerCtrl {

    constructor($scope, $uibModalInstance, model) {
        'ngInject';

        this.$scope = $scope;

        this.$scope.model = model;

        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        this.$scope.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        this.$scope.inlineOptions = {
            formatMonth: 'MM',
            customClass: (data) => {
                let date = data.date;
                let mode = data.mode;
                if (mode === 'day') {
                    let dayToCheck = new Date(date).setHours(0,0,0,0);

                    for (let i = 0; i < this.$scope.events.length; i++) {
                        let currentDay = new Date(this.$scope.events[i].date).setHours(0,0,0,0);

                        if (dayToCheck === currentDay) {
                            return this.$scope.events[i].status;
                        }
                    }
                }

                return '';
            },
            minDate: new Date(),
            showWeeks: false
        };

    }

}
