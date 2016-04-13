define('ember-cli-chart/chart-data-updater', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Object.extend({
    redraw: false,
    updateByType: function updateByType() {
      var data = this.get('data');

      if (data.datasets) {
        return this.updateLinearCharts();
      }
      if (Array.isArray(data)) {
        return this.updatePieCharts();
      }
      return this.get('redraw');
    },

    updateLinearCharts: function updateLinearCharts() {
      var datasets = this.get('data').datasets;
      var labels = this.get('data').labels;
      var chart = this.get('chart');
      var self = this;

      if (chart.datasets.length !== datasets.length) {
        return this.set('redraw', true);
      } else if (typeof chart.datasets[0].bars !== 'undefined') {
        if (chart.datasets[0].bars.length !== datasets[0].data.length) {
          return this.set('redraw', true);
        }
      } else if (typeof chart.datasets[0].points !== 'undefined') {
        chart.datasets.forEach(function (value, index) {
          if (chart.datasets[index].points.length !== datasets[index].data.length) {
            return self.set('redraw', true);
          }
        });
      }

      // Update Labels
      chart.scale.xLabels = labels;

      // Update dataset
      datasets.forEach(function (dataset, i) {
        var chartDataset = chart.datasets[i];

        try {
          dataset.data.forEach(function (item, j) {
            item = item || 0;
            if (typeof chartDataset.bars !== 'undefined') {
              chartDataset.bars[j].value = item;

              // Update tooltip labels
              chartDataset.bars[j].label = labels[j];
            } else {
              chartDataset.points[j].value = item;

              // Update tooltip labels
              chartDataset.points[j].label = labels[j];
            }
          });
        } catch (e) {
          if (e instanceof TypeError) {
            self.set('redraw', true);
          } else {
            console.error(e);
          }
        }
      });

      return this.get('redraw');
    },

    updatePieCharts: function updatePieCharts() {
      var data = _ember['default'].A(this.get('data'));
      var chart = this.get('chart');
      var chartSegments = _ember['default'].A(chart.segments);

      chart.segments.forEach(function (segment, i) {
        var updatedSegment = data.findBy('label', segment.label);
        if (updatedSegment) {
          // Same segment exists in new data
          chart.segments[i].value = updatedSegment.value || 0;

          // Update label
          chart.segments[i].label = updatedSegment.label || '';
        } else {
          // Segment does not exist anymore in new data
          chart.removeData(i);
        }
      });

      data.forEach(function (segment) {
        var currentSegment = chartSegments.findBy('label', segment.label);
        if (!currentSegment) {
          chart.addData(segment);
        }
      });

      return this.get('redraw');
    }

  });
});