import Ember from 'ember';
import layout from '../templates/components/power-select-multiple';
import fallbackIfUndefined from '../utils/computed-fallback-if-undefined';

var computed = Ember.computed;

export default Ember.Component.extend({
  layout: layout,
  // Config
  triggerComponent: fallbackIfUndefined('power-select-multiple/trigger'),
  beforeOptionsComponent: fallbackIfUndefined(null),

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
      var selected = Ember.A(this.get('selected') || []);
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