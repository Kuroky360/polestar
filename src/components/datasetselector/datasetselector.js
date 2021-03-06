'use strict';

angular.module('polestar')
  .directive('datasetSelector', function(Dataset, Config, Spec, Logger) {
    return {
      templateUrl: 'components/datasetselector/datasetselector.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: function($scope) {
        $scope.Dataset = Dataset;

        $scope.datasetChanged = function() {
          var dataset = Dataset.dataset;

          Logger.logInteraction(Logger.actions.DATASET_CHANGE, dataset.name);

          Dataset.update(dataset).then(function() {
            Config.updateDataset(Dataset.dataset, Dataset.type);
            Spec.reset();
          });
        };
      }
    };
  });
