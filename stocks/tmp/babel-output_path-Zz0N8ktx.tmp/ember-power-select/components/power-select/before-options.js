define('ember-power-select/components/power-select/before-options', ['exports', 'ember', 'ember-power-select/templates/components/power-select/before-options', 'ember-power-select/utils/update-input-value'], function (exports, _ember, _emberPowerSelectTemplatesComponentsPowerSelectBeforeOptions, _emberPowerSelectUtilsUpdateInputValue) {
  'use strict';

  var run = _ember['default'].run;

  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    layout: _emberPowerSelectTemplatesComponentsPowerSelectBeforeOptions['default'],

    // Lifecycle hooks
    didReceiveAttrs: function didReceiveAttrs(_ref) {
      var oldAttrs = _ref.oldAttrs;
      var newAttrs = _ref.newAttrs;

      this._super.apply(this, arguments);
      if (newAttrs.searchText !== undefined && newAttrs.searchText !== null) {
        run.scheduleOnce('afterRender', this, this.updateInput, newAttrs.searchText);
      }
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.focusInput();
      this.get('eventSender').on('focus', this, this.focusInput);
    },

    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);
      if (this.get('searchEnabled')) {
        this.get('select.actions.search')('');
      }
      this.get('eventSender').off('focus', this, this.focusInput);
    },

    // Actions
    actions: {
      handleKeydown: function handleKeydown(e) {
        var select = this.get('select');
        if (e.keyCode === 13) {
          var onkeydown = this.get('onkeydown');
          if (onkeydown) {
            onkeydown(select, e);
          }
          if (e.defaultPrevented) {
            return;
          }
          select.actions.choose(this.get('highlighted'), e);
        } else {
          select.actions.handleKeydown(e);
        }
      }
    },

    // Methods
    updateInput: function updateInput(value) {
      (0, _emberPowerSelectUtilsUpdateInputValue['default'])(this.input, value);
    },

    focusInput: function focusInput() {
      this.input = self.document.querySelector('.ember-power-select-search input');
      if (this.input) {
        run.scheduleOnce('afterRender', this.input, 'focus');
      }
    }
  });
});