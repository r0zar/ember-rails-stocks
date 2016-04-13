define('stocks/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    chartData: _ember['default'].computed('model', function () {
      return {
        labels: [this.store.findRecord('stock', 9666).name],
        datasets: [{
          label: 'Stock Last Sale (USD)',
          data: ["10.00"]
        }]
      };
    }),
    actions: {
      chooseStock: function chooseStock(stock) {
        this.set('target', stock);
      }
    }
  });
});