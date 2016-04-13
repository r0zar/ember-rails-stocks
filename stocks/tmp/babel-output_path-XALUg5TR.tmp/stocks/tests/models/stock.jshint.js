define('stocks/tests/models/stock.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/stock.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/stock.js should pass jshint.');
  });
});