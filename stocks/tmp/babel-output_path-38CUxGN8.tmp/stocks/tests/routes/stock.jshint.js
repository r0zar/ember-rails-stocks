define('stocks/tests/routes/stock.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/stock.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stock.js should pass jshint.');
  });
});