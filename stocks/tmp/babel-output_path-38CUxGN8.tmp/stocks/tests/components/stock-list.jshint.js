define('stocks/tests/components/stock-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/stock-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/stock-list.js should pass jshint.');
  });
});