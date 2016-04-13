define('stocks/serializers/stock', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({
    keyForAttribute: function keyForAttribute(key) {
      return _ember['default'].String.decamelize(key);
    }
  });
});