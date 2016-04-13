define('stocks/tests/routes/stocks.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/stocks.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stocks.js should pass jshint.');
  });
});