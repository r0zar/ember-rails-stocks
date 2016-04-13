define('stocks/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    chartData: _ember['default'].computed('model', function () {
      return {
        labels: this.get('model').mapBy('name'),
        datasets: [{
          label: 'Stock Price (USD)',
          data: this.get('model').mapBy('lastSale')
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