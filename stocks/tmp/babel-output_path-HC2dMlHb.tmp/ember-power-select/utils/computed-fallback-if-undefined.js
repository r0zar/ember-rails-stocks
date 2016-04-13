define('ember-power-select/utils/computed-fallback-if-undefined', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = computedFallbackIfUndefined;

  function computedFallbackIfUndefined(fallback) {
    return _ember['default'].computed({
      get: function get() {
        return fallback;
      },
      set: function set(_, v) {
        return v === undefined ? fallback : v;
      }
    });
  }
});