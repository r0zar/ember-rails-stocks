define('ember-power-select/components/power-select-multiple', ['exports', 'ember', 'ember-power-select/templates/components/power-select-multiple', 'ember-power-select/utils/computed-fallback-if-undefined'], function (exports, _ember, _emberPowerSelectTemplatesComponentsPowerSelectMultiple, _emberPowerSelectUtilsComputedFallbackIfUndefined) {
  'use strict';

  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberPowerSelectTemplatesComponentsPowerSelectMultiple['default'],
    // Config
    triggerComponent: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])('power-select-multiple/trigger'),
    beforeOptionsComponent: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),

    // CPs
    concatenatedTriggerClass: computed('triggerClass', function () {
      var classes = ['ember-power-select-multiple-trigger'];
      if (this.get('triggerClass')) {
        classes.push(this.get('triggerClass'));
      }
      return classes.join(' ');
    }),

    // Actions
    actions: {
      handleOpen: function handleOpen(select, e) {
        var action = this.get('onopen');
        if (action && action(select, e) === false) {
          return false;
        }
        this.focusInput();
      },

      handleFocus: function handleFocus(select, e) {
        var action = this.get('onfocus');
        if (action) {
          action(select, e);
        }
        this.focusInput();
      },

      handleKeydown: function handleKeydown(select, e) {
        var action = this.get('onkeydown');
        if (action && action(select, e) === false) {
          e.stopPropagation();
          return false;
        }
        var selected = _ember['default'].A(this.get('selected') || []);
        if (e.keyCode === 13 && select.isOpen) {
          e.stopPropagation();
          if (select.highlighted !== undefined) {
            if (selected.indexOf(select.highlighted) === -1) {
              select.actions.choose(select.highlighted, e);
            } else {
              select.actions.close(e);
            }
          } else {
            select.actions.close(e);
          }
        }
      },

      buildSelection: function buildSelection(option) {
        var newSelection = (this.get('selected') || []).slice(0);
        var idx = newSelection.indexOf(option);
        if (idx > -1) {
          newSelection.splice(idx, 1);
        } else {
          newSelection.push(option);
        }
        return newSelection;
      }
    },

    // Methods
    focusInput: function focusInput() {
      var input = this.element.querySelector('.ember-power-select-trigger-multiple-input');
      if (input) {
        input.focus();
      }
    }
  });
});