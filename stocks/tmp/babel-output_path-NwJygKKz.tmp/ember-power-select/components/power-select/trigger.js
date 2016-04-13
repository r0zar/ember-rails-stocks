define('ember-power-select/components/power-select/trigger', ['exports', 'ember', 'ember-power-select/templates/components/power-select/trigger'], function (exports, _ember, _emberPowerSelectTemplatesComponentsPowerSelectTrigger) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberPowerSelectTemplatesComponentsPowerSelectTrigger['default'],
    tagName: '',

    // Actions
    actions: {
      clear: function clear(e) {
        e.stopPropagation();
        this.get('select.actions.select')(null);
      }
    }
  });
});