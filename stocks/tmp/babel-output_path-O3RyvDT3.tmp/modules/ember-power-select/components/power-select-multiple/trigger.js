import Ember from 'ember';
import layout from '../../templates/components/power-select-multiple/trigger';
import _updateInput from '../../utils/update-input-value';

var computed = Ember.computed;
var get = Ember.get;
var isBlank = Ember.isBlank;
var run = Ember.run;
var htmlSafe = Ember.String.htmlSafe;

var ua = self.window ? self.window.navigator.userAgent : '';
var isIE = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
var isTouchDevice = Ember.testing || !!self.window && 'ontouchstart' in self.window;

export default Ember.Component.extend({
  tagName: '',
  layout: layout,

  // Lifecycle hooks
  didInsertElement: function didInsertElement() {
    var _this = this;

    this._super.apply(this, arguments);
    this.input = document.querySelector('.' + this.elementId + '-input');
    var optionsList = document.getElementById(this.elementId + '-ember-power-select-multiple-options');
    var chooseOption = function chooseOption(e) {
      if (e.target.dataset.selectedIndex) {
        e.stopPropagation();
        e.preventDefault();

        var index = e.target.dataset.selectedIndex;
        var selected = _this.get('selected');
        var object = _this.selectedObject(selected, index);

        _this.get('select.actions.choose')(object);
      }
    };
    if (isTouchDevice) {
      optionsList.addEventListener('touchstart', chooseOption);
    }
    optionsList.addEventListener('mousedown', chooseOption);
  },

  didUpdateAttrs: function didUpdateAttrs(_ref) {
    var oldAttrs = _ref.oldAttrs;
    var newAttrs = _ref.newAttrs;

    this._super.apply(this, arguments);
    if (oldAttrs.select.isOpen && !newAttrs.select.isOpen) {
      this.handleClose();
    }
    if (newAttrs.searchText !== undefined && newAttrs.searchText !== null) {
      run.scheduleOnce('afterRender', this, this.updateInput, newAttrs.searchText);
    }
  },

  // CPs
  triggerMultipleInputStyle: computed('searchText.length', 'selected.length', function () {
    run.scheduleOnce('afterRender', this.get('select.actions.reposition'));
    if (this.get('selected.length') === 0) {
      return htmlSafe('width: 100%;');
    } else {
      return htmlSafe('width: ' + ((this.get('searchText.length') || 0) * 0.5 + 0.5) + 'em');
    }
  }),

  maybePlaceholder: computed('placeholder', 'selected.length', function () {
    if (isIE) {
      return null;
    }
    var selected = this.get('selected');
    return !selected || get(selected, 'length') === 0 ? this.get('placeholder') || '' : '';
  }),

  // Actions
  actions: {
    handleInput: function handleInput(e) {
      var action = this.get('handleInput');
      if (action) {
        action(e);
      }
      if (e.defaultPrevented) {
        return;
      }
      this.get('select.actions.open')(e);
    },

    handleKeydown: function handleKeydown(e) {
      var _getProperties = this.getProperties('onkeydown', 'select');

      var onkeydown = _getProperties.onkeydown;
      var select = _getProperties.select;

      if (onkeydown && onkeydown(select, e) === false) {
        return false;
      }
      var selected = Ember.A(this.get('selected') || []);
      if (e.keyCode === 8 && isBlank(e.target.value)) {
        var lastSelection = get(selected, 'lastObject');
        if (lastSelection) {
          select.actions.select(this.get('buildSelection')(lastSelection), e);
          if (typeof lastSelection === 'string') {
            select.actions.search(lastSelection);
          } else {
            var searchField = this.get('searchField');
            Ember.assert('`{{power-select-multiple}}` requires a `searchField` when the options are not strings to remove options using backspace', searchField);
            select.actions.search(get(lastSelection, searchField));
          }
          select.actions.open(e);
        }
      } else if (e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode === 32) {
        // Keys 0-9, a-z or SPACE
        e.stopPropagation();
      }
    }
  },

  // Methods
  handleClose: function handleClose() {
    run.scheduleOnce('actions', null, this.get('select.actions.search'), '');
  },

  updateInput: function updateInput(value) {
    _updateInput(this.input, value);
  },

  selectedObject: function selectedObject(list, index) {
    if (list.objectAt) {
      return list.objectAt(index);
    } else {
      return get(list, index);
    }
  }
});