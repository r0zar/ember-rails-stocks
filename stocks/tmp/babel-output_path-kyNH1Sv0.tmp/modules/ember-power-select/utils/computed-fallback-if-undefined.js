

export default computedFallbackIfUndefined;
import Ember from 'ember';
function computedFallbackIfUndefined(fallback) {
  return Ember.computed({
    get: function get() {
      return fallback;
    },
    set: function set(_, v) {
      return v === undefined ? fallback : v;
    }
  });
}