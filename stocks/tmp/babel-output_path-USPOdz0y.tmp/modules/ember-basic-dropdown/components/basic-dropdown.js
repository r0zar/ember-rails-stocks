/*jshint unused:false*/
import Ember from 'ember';
import layout from '../templates/components/basic-dropdown';
import getOwner from 'ember-getowner-polyfill';
import config from 'ember-get-config';

var Component = Ember.Component;
var run = Ember.run;
var computed = Ember.computed;

var defaultDestination = config['ember-basic-dropdown'] && config['ember-basic-dropdown'].destination || 'ember-basic-dropdown-wormhole';

export default Component.extend({
  layout: layout,
  isTouchDevice: !!self.window && 'ontouchstart' in self.window,
  disabled: false,
  renderInPlace: false,
  role: 'button',
  destination: null,
  triggerDisabled: false,
  initiallyOpened: false,
  hasFocusInside: false,
  verticalPosition: 'auto', // above | below
  horizontalPosition: 'auto', // right | left
  classNames: ['ember-basic-dropdown'],
  attributeBindings: ['dir'],
  classNameBindings: ['renderInPlace:ember-basic-dropdown--in-place', 'hasFocusInside:ember-basic-dropdown--focus-inside', '_verticalPositionClass', '_horizontalPositionClass'],

  // Lifecycle hooks
  init: function init() {
    this._super.apply(this, arguments);
    this._touchMoveHandler = this._touchMoveHandler.bind(this);
  },

  didInitAttrs: function didInitAttrs() {
    this._super.apply(this, arguments);
    var registerActionsInParent = this.get('registerActionsInParent');
    if (registerActionsInParent) {
      registerActionsInParent(this.get('publicAPI'));
    }
  },

  didInsertElement: function didInsertElement() {
    var _this = this;

    this._super.apply(this, arguments);
    if (this.get('triggerDisabled')) {
      return;
    }
    var trigger = this.element.querySelector('.ember-basic-dropdown-trigger');
    if (this.isTouchDevice) {
      trigger.addEventListener('touchstart', function (e) {
        _this.get('appRoot').addEventListener('touchmove', _this._touchMoveHandler);
      });
      trigger.addEventListener('touchend', function (e) {
        _this.send('handleTouchEnd', e);
        e.preventDefault(); // Prevent synthetic click
      });
    }
    trigger.addEventListener('mousedown', function (e) {
      return _this.send('handleMousedown', e);
    });

    var onMouseEnter = this.get('onMouseEnter');
    if (onMouseEnter) {
      trigger.addEventListener('mouseenter', function (e) {
        return onMouseEnter(_this.get('publicAPI'), e);
      });
    }

    var onMouseLeave = this.get('onMouseLeave');
    if (onMouseLeave) {
      trigger.addEventListener('mouseleave', function (e) {
        return onMouseLeave(_this.get('publicAPI'), e);
      });
    }
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    this.get('appRoot').removeEventListener('touchmove', this._touchMoveHandler);
  },

  // Events
  focusIn: function focusIn(e) {
    this.send('handleFocusIn', e);
  },

  focusOut: function focusOut(e) {
    this.send('handleFocusOut', e);
  },

  // CPs
  appRoot: computed(function () {
    var rootSelector = Ember.testing ? '#ember-testing' : getOwner(this).lookup('application:main').rootElement;
    return self.document.querySelector(rootSelector);
  }),

  wormholeDestination: computed('destination', function () {
    return Ember.testing ? 'ember-testing' : this.get('destination') || defaultDestination;
  }),

  dropdownId: computed(function () {
    return 'ember-basic-dropdown-content-' + this.elementId;
  }),

  tabIndex: computed('disabled', function () {
    return !this.get('disabled') ? this.get('tabindex') || '0' : null;
  }),

  publicAPI: computed(function () {
    var _this2 = this;

    return {
      isOpen: this.get('initiallyOpened'),
      actions: {
        open: this.open.bind(this),
        close: this.close.bind(this),
        toggle: this.toggle.bind(this),
        reposition: function reposition() {
          return run.join(_this2, _this2._performReposition);
        }
      }
    };
  }),

  // Actions
  actions: {
    handleTouchEnd: function handleTouchEnd(e) {
      if (e && e.defaultPrevented) {
        return;
      }
      if (!this.hasMoved) {
        this.toggle(e);
      }
      this.hasMoved = false;
    },

    handleMousedown: function handleMousedown(e) {
      if (e && e.defaultPrevented) {
        return;
      }
      this.stopTextSelectionUntilMouseup();
      this.toggle(e);
    },

    keydown: function keydown(e) {
      this.handleKeydown(e);
    },

    handleFocus: function handleFocus(e) {
      var onFocus = this.get('onFocus');
      if (onFocus) {
        onFocus(this.get('publicAPI'), e);
      }
    },

    handleFocusIn: function handleFocusIn() {
      this.set('hasFocusInside', true);
    },

    handleFocusOut: function handleFocusOut() {
      this.set('hasFocusInside', false);
    }
  },

  // Methods
  toggle: function toggle(e) {
    if (this.get('publicAPI.isOpen')) {
      this.close(e);
    } else {
      this.open(e);
    }
  },

  open: function open(e) {
    if (this.get('disabled') || this.get('publicAPI.isOpen')) {
      return;
    }
    var onOpen = this.get('onOpen');
    if (onOpen && onOpen(this.get('publicAPI'), e) === false) {
      return;
    }
    this.set('publicAPI.isOpen', true);
  },

  close: function close(e, skipFocus) {
    if (!this.get('publicAPI.isOpen')) {
      return;
    }
    var onClose = this.get('onClose');
    if (onClose && onClose(this.get('publicAPI'), e) === false) {
      return;
    }
    this.set('publicAPI.isOpen', false);
    this.setProperties({ _verticalPositionClass: null, _horizontalPositionClass: null });
    if (skipFocus) {
      return;
    }
    var trigger = this.element.querySelector('.ember-basic-dropdown-trigger');
    if (trigger.tabIndex > -1) {
      trigger.focus();
    }
  },

  handleKeydown: function handleKeydown(e) {
    if (this.get('disabled')) {
      return;
    }
    var onKeydown = this.get('onKeydown');
    if (onKeydown && onKeydown(this.get('publicAPI'), e) === false) {
      return;
    }
    if (e.keyCode === 13) {
      // Enter
      this.toggle(e);
    } else if (e.keyCode === 27) {
      this.close(e);
    }
  },

  stopTextSelectionUntilMouseup: function stopTextSelectionUntilMouseup() {
    if (self.FastBoot) {
      return;
    }
    var $appRoot = Ember.$(this.get('appRoot'));
    var mouseupHandler = function mouseupHandler() {
      $appRoot[0].removeEventListener('mouseup', mouseupHandler, true);
      $appRoot.removeClass('ember-basic-dropdown-text-select-disabled');
    };
    $appRoot[0].addEventListener('mouseup', mouseupHandler, true);
    $appRoot.addClass('ember-basic-dropdown-text-select-disabled');
  },

  _performReposition: function _performReposition() {
    if (!this.get('publicAPI.isOpen')) {
      return;
    }
    var dropdown = self.document.getElementById(this.get('dropdownId'));
    if (!dropdown) {
      return;
    }

    var _getPositionInfo2 = // scroll
    this._getPositionInfo(dropdown);

    var triggerTop = _getPositionInfo2.triggerTop;
    var triggerLeft = _getPositionInfo2.triggerLeft;
    var triggerWidth = _getPositionInfo2.triggerWidth;
    var triggerHeight = _getPositionInfo2.triggerHeight;
    var // trigger dimensions
    dropdownHeight = _getPositionInfo2.dropdownHeight;
    var dropdownWidth = _getPositionInfo2.dropdownWidth;
    var // dropdown dimensions
    scrollTop = _getPositionInfo2.scrollTop;
    var scrollLeft = _getPositionInfo2.scrollLeft;

    var dropdownTop = undefined,
        dropdownLeft = triggerLeft;

    // hPosition
    var hPosition = this.get('horizontalPosition');
    if (this.get('renderInPlace')) {
      if (['right', 'left'].indexOf(hPosition) === -1) {
        var viewportRight = scrollLeft + self.window.innerWidth;
        hPosition = triggerLeft + dropdownWidth > viewportRight ? 'right' : 'left';
      }
      return this.set('_horizontalPositionClass', 'ember-basic-dropdown--' + hPosition);
    } else {
      if (['right', 'left'].indexOf(hPosition) === -1) {
        var viewportRight = scrollLeft + self.window.innerWidth;
        var roomForRight = viewportRight - triggerLeft;
        var roomForLeft = triggerLeft;
        hPosition = roomForRight > roomForLeft ? 'left' : 'right';
      }
      if (hPosition === 'right') {
        dropdownLeft = triggerLeft + triggerWidth - dropdownWidth;
      }
      this.set('_horizontalPositionClass', 'ember-basic-dropdown--' + hPosition);
    }

    // vPosition
    var vPosition = this.get('verticalPosition');
    var triggerTopWithScroll = triggerTop + scrollTop;
    if (vPosition === 'above') {
      dropdownTop = triggerTopWithScroll - dropdownHeight;
      this.set('_verticalPositionClass', 'ember-basic-dropdown--above');
    } else if (vPosition === 'below') {
      dropdownTop = triggerTopWithScroll + triggerHeight;
      this.set('_verticalPositionClass', 'ember-basic-dropdown--below');
    } else {
      // auto
      var viewportBottom = scrollTop + self.window.innerHeight;
      var enoughRoomBelow = triggerTopWithScroll + triggerHeight + dropdownHeight < viewportBottom;
      var enoughRoomAbove = triggerTop > dropdownHeight;

      var verticalPositionClass = this.get('_verticalPositionClass');
      if (verticalPositionClass === 'ember-basic-dropdown--below' && !enoughRoomBelow && enoughRoomAbove) {
        this.set('_verticalPositionClass', 'ember-basic-dropdown--above');
      } else if (verticalPositionClass === 'ember-basic-dropdown--above' && !enoughRoomAbove && enoughRoomBelow) {
        this.set('_verticalPositionClass', 'ember-basic-dropdown--below');
      } else if (!verticalPositionClass) {
        this.set('_verticalPositionClass', enoughRoomBelow ? 'ember-basic-dropdown--below' : 'ember-basic-dropdown--above');
      }
      verticalPositionClass = this.get('_verticalPositionClass'); // It might have changed
      dropdownTop = triggerTopWithScroll + (verticalPositionClass === 'ember-basic-dropdown--below' ? triggerHeight : -dropdownHeight);
    }

    dropdown.style.width = dropdownWidth + 'px';
    dropdown.style.top = dropdownTop + 'px';
    dropdown.style.left = dropdownLeft + 'px';
  },

  _getPositionInfo: function _getPositionInfo(dropdown) {
    var trigger = this.element.querySelector('.ember-basic-dropdown-trigger');

    var _trigger$getBoundingClientRect = trigger.getBoundingClientRect();

    var triggerLeft = _trigger$getBoundingClientRect.left;
    var triggerTop = _trigger$getBoundingClientRect.top;
    var triggerWidth = _trigger$getBoundingClientRect.width;
    var triggerHeight = _trigger$getBoundingClientRect.height;

    var _dropdown$getBoundingClientRect = dropdown.getBoundingClientRect();

    var dropdownHeight = _dropdown$getBoundingClientRect.height;
    var dropdownWidth = _dropdown$getBoundingClientRect.width;

    var $window = Ember.$(self.window);
    var scrollLeft = $window.scrollLeft();
    var scrollTop = $window.scrollTop();
    if (this.get('matchTriggerWidth')) {
      dropdownWidth = triggerWidth;
    }
    return {
      triggerTop: triggerTop, triggerLeft: triggerLeft, triggerWidth: triggerWidth, triggerHeight: triggerHeight,
      dropdownHeight: dropdownHeight, dropdownWidth: dropdownWidth,
      scrollLeft: scrollLeft, scrollTop: scrollTop
    };
  },

  _touchMoveHandler: function _touchMoveHandler(e) {
    this.hasMoved = true;
    this.get('appRoot').removeEventListener('touchmove', this._touchMoveHandler);
  }
});