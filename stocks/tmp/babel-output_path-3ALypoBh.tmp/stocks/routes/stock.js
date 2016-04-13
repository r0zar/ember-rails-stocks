define('stocks/routes/stock', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(param) {
      _ember['default'].Logger.debug('json: ', this.store.query('stock', param));
      return this.store.query('stock', param);
    }
  });
});