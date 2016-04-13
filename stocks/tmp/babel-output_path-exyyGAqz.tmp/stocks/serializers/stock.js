define('stocks/serializers/stock', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({
    keyForAttribute: function keyForAttribute(key) {
      _ember['default'].Logger.debug('The key is:', key);
      return _ember['default'].String.decamelize(key);
    }
  });
});