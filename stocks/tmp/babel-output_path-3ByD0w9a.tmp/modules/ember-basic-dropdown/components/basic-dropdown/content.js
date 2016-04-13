import WormholeComponent from 'ember-wormhole/components/ember-wormhole';
import Ember from 'ember';
import layout from '../../templates/components/basic-dropdown/content';

var run = Ember.run;

var MutObserver = self.window.MutationObserver || self.window.WebKitMutationObserver;
function waitForAnimations(element, callback) {
  var computedStyle = self.window.getComputedStyle(element);
  if (computedStyle.transitionDuration !== '0s') {
    (function () {
      var eventCallback = function eventCallback() {
        element.removeEventListener('transitionend', eventCallback);
        callback();
      };
      element.addEventListener('transitionend', eventCallback);
    })();
  } else if (computedStyle.animationName !== 'none' && computedStyle.animationPlayState === 'running') {
    (function () {
      var eventCallback = function eventCallback() {
        element.removeEventListener('animationend', eventCallback);
        callback();
      };
      element.addEventListener('animationend', eventCallback);
    })();
  } else {
    callback();
  }
}

export default WormholeComponent.extend({
  layout: layout,
  mutationObserver: null,
  transitionClass: 'ember-basic-dropdown--transitioning-in',

  // Lifecycle hooks
  didInsertElement: function didInsertElement() {
    var _this = this;

    this._super.apply(this, arguments);
    var dropdown = self.window.document.getElementById(this.get('dropdownId'));
    this.handleRootMouseDown = this.handleRootMouseDown.bind(this, dropdown);
    this.get('appRoot').addEventListener('mousedown', this.handleRootMouseDown, true);
    if (!this.get('renderInPlace')) {
      dropdown.addEventListener('focusin', this.get('onFocusIn'));
      dropdown.addEventListener('focusout', this.get('onFocusOut'));
      this.addGlobalEvents(dropdown);
    }
    run.scheduleOnce('actions', this.get('reposition'));
    waitForAnimations(dropdown, function () {
      return _this.set('animationClass', 'ember-basic-dropdown--transitioned-in');
    });
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    var dropdown = self.window.document.getElementById(this.get('dropdownId'));
    this.get('appRoot').removeEventListener('mousedown', this.handleRootMouseDown, true);
    this.removeGlobalEvents(dropdown);
    this.animateOut(dropdown);
  },

  // Methods
  animateOut: function animateOut(dropdown) {
    var parentElement = this.get('renderInPlace') ? dropdown.parentElement.parentElement : dropdown.parentElement;
    var clone = dropdown.cloneNode(true);
    clone.id = clone.id + '--clone';
    clone.classList.remove('ember-basic-dropdown--transitioned-in');
    clone.classList.remove('ember-basic-dropdown--transitioning-in');
    clone.classList.add('ember-basic-dropdown--transitioning-out');
    parentElement.appendChild(clone);
    waitForAnimations(clone, function () {
      parentElement.removeChild(clone);
    });
  },

  handleRootMouseDown: function handleRootMouseDown(dropdownContent, e) {
    var comesFromInside = this.element.parentElement.contains(e.target) || dropdownContent.contains(e.target);
    if (comesFromInside) {
      return;
    }
    var closestDDcontent = Ember.$(e.target).closest('.ember-basic-dropdown-content')[0];
    if (closestDDcontent) {
      var closestDropdownId = closestDDcontent.id.match(/ember\d+$/)[0];
      var clickedOnNestedDropdown = !!dropdownContent.querySelector('#' + closestDropdownId);
      if (clickedOnNestedDropdown) {
        return;
      }
    }
    this.get('close')(e, true);
  },

  addGlobalEvents: function addGlobalEvents(dropdown) {
    var reposition = this.get('reposition');
    self.window.addEventListener('scroll', reposition);
    self.window.addEventListener('resize', reposition);
    self.window.addEventListener('orientationchange', reposition);
    if (MutObserver) {
      this.mutationObserver = new MutObserver(function (mutations) {
        if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
          reposition();
        }
      });
      this.mutationObserver.observe(dropdown, { childList: true, subtree: true });
    } else {
      dropdown.addEventListener('DOMNodeInserted', reposition, false);
      dropdown.addEventListener('DOMNodeRemoved', reposition, false);
    }
  },

  removeGlobalEvents: function removeGlobalEvents(dropdown) {
    var reposition = this.get('reposition');
    self.window.removeEventListener('scroll', reposition);
    self.window.removeEventListener('resize', reposition);
    self.window.removeEventListener('orientationchange', reposition);
    if (MutObserver) {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.mutationObserver = null;
      }
    } else {
      dropdown.removeEventListener('DOMNodeInserted', reposition);
      dropdown.removeEventListener('DOMNodeRemoved', reposition);
    }
  }
});