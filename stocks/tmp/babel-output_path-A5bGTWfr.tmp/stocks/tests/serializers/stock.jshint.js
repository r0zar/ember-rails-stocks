define('stocks/tests/serializers/stock.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/stock.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/stock.js should pass jshint.');
  });
});