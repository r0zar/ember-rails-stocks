define('ember-power-select/components/power-select', ['exports', 'ember', 'ember-power-select/templates/components/power-select', 'ember-power-select/utils/group-utils', 'ember-power-select/utils/computed-fallback-if-undefined'], function (exports, _ember, _emberPowerSelectTemplatesComponentsPowerSelect, _emberPowerSelectUtilsGroupUtils, _emberPowerSelectUtilsComputedFallbackIfUndefined) {
  'use strict';

  var computed = _ember['default'].computed;
  var run = _ember['default'].run;
  var get = _ember['default'].get;
  var isBlank = _ember['default'].isBlank;

  var EventSender = _ember['default'].Object.extend(_ember['default'].Evented);
  var assign = _ember['default'].assign || _ember['default'].merge;
  function concatWithProperty(strings, property) {
    if (property) {
      strings.push(property);
    }
    return strings.join(' ');
  }

  exports['default'] = _ember['default'].Component.extend({
    // HTML
    layout: _emberPowerSelectTemplatesComponentsPowerSelect['default'],
    tagName: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(''),

    // Config
    disabled: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(false),
    placeholder: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    loadingMessage: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])('Loading options...'),
    noMatchesMessage: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])('No results found'),
    verticalPosition: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])('auto'),
    horizontalPosition: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])('auto'),
    matcher: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(_emberPowerSelectUtilsGroupUtils.defaultMatcher),
    searchField: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    search: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    closeOnSelect: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(true),
    dropdownClass: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    triggerClass: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    dir: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    initiallyOpened: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(false),
    searchEnabled: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(true),
    searchMessage: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])("Type to search"),
    searchPlaceholder: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    allowClear: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(false),
    triggerComponent: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])('power-select/trigger'),
    selectedItemComponent: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    optionsComponent: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])('power-select/options'),
    beforeOptionsComponent: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])('power-select/before-options'),
    afterOptionsComponent: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(null),
    matchTriggerWidth: (0, _emberPowerSelectUtilsComputedFallbackIfUndefined['default'])(true),

    // Attrs
    searchText: '',
    lastSearchedText: '',
    expirableSearchText: '',
    activeSearch: null,
    openingEvent: null,
    loading: false,
    previousResults: null,

    // Lifecycle hooks
    didInitAttrs: function didInitAttrs() {
      this._super.apply(this, arguments);
      _ember['default'].assert('{{power-select}} requires an `onchange` function', this.get('onchange') && typeof this.get('onchange') === 'function');
    },

    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);
      this.activeSearch = null;
      run.cancel(this.expirableSearchDebounceId);
    },

    // CPs
    triggerId: computed(function () {
      return 'ember-power-select-trigger-' + this.elementId;
    }),

    optionsId: computed(function () {
      return 'ember-power-select-options-' + this.elementId;
    }),

    concatenatedClasses: computed('class', function () {
      return concatWithProperty(['ember-power-select'], this.get('class'));
    }),

    concatenatedTriggerClasses: computed('triggerClass', function () {
      return concatWithProperty(['ember-power-select-trigger'], this.get('triggerClass'));
    }),

    concatenatedDropdownClasses: computed('dropdownClass', function () {
      return concatWithProperty(['ember-power-select-dropdown', 'ember-power-select-dropdown-' + this.elementId], this.get('dropdownClass'));
    }),

    mustShowSearchMessage: computed('searchText', 'search', 'searchMessage', 'results.length', function () {
      return this.get('searchText.length') === 0 && !!this.get('search') && !!this.get('searchMessage') && this.get('results.length') === 0;
    }),

    mustShowNoMessages: computed('results.length', 'loading', 'search', 'lastSearchedText', function () {
      return !this.get('loading') && this.get('results.length') === 0 && (!this.get('search') || this.get('lastSearchedText.length') > 0);
    }),

    results: computed('options.[]', {
      get: function get() {
        var _this = this;

        var options = this.get('options') || [];
        var searchAction = this.get('search');
        if (options.then) {
          this.set('loading', true);
          options.then(function (results) {
            if (_this.get('isDestroyed')) {
              return;
            }
            _this.set('results', results);
          });
          return this.previousResults || [];
        }
        var newResults = searchAction ? options : this.filter(options, this.get('searchText'));
        this.setProperties({ loading: false, currentlyHighlighted: undefined });
        this.previousResults = newResults;
        return newResults;
      },
      set: function set(_, newResults) {
        this.previousResults = newResults;
        this.setProperties({ loading: false, currentlyHighlighted: undefined });
        return newResults;
      }
    }),

    resolvedSelected: computed('selected', {
      get: function get() {
        var _this2 = this;

        var selected = this.get('selected');
        if (selected && selected.then) {
          selected.then(function (value) {
            if (_this2.get('isDestroyed')) {
              return;
            }
            // Ensure that we don't overwrite new value
            if (_this2.get('selected') === selected) {
              _this2.set('resolvedSelected', value);
            }
          });
        } else {
          return selected;
        }
      },
      set: function set(_, v) {
        return v;
      }
    }),

    optionMatcher: computed('searchField', 'matcher', function () {
      var _getProperties = this.getProperties('matcher', 'searchField');

      var matcher = _getProperties.matcher;
      var searchField = _getProperties.searchField;

      if (searchField) {
        return function (option, text) {
          return matcher(get(option, searchField), text);
        };
      } else {
        return function (option, text) {
          return matcher(option, text);
        };
      }
    }),

    highlighted: computed('results.[]', 'currentlyHighlighted', 'resolvedSelected', function () {
      return this.get('currentlyHighlighted') || this.defaultHighlighted();
    }),

    resultsLength: computed('results.[]', function () {
      return (0, _emberPowerSelectUtilsGroupUtils.countOptions)(this.get('results'));
    }),

    eventSender: computed(function () {
      return EventSender.create();
    }),

    publicAPI: computed('registeredDropdown.isOpen', 'highlighted', 'searchText', function () {
      var _this3 = this;

      var dropdown = this.get('registeredDropdown');
      if (dropdown) {
        var ownActions = {
          search: function search(term, e) {
            return _this3.send('search', dropdown, term, e);
          },
          highlight: function highlight(option) {
            return _this3.send('highlight', dropdown, option);
          },
          select: function select(selected, e) {
            return _this3.send('select', dropdown, selected, e);
          },
          choose: function choose(selected, e) {
            return _this3._doChoose(dropdown, selected, e);
          },
          handleKeydown: function handleKeydown(e) {
            return _this3.send('handleKeydown', dropdown, e);
          }
        };
        return {
          isOpen: dropdown.isOpen,
          highlighted: this.get('highlighted'),
          searchText: this.get('searchText'),
          actions: assign(ownActions, dropdown.actions)
        };
      }
      return {};
    }),

    // Actions
    actions: {
      highlight: function highlight(dropdown, option) {
        this._doHighlight(dropdown, option);
      },

      search: function search(dropdown, term /*, e */) {
        this._doSearch(dropdown, term);
      },

      handleInput: function handleInput(e) {
        var term = e.target.value;
        var action = this.get('oninput');
        if (action) {
          var returnValue = action(e.target.value, this.get('publicAPI'), e);
          if (returnValue === false) {
            return;
          }
        }
        this.send('search', this.get('registeredDropdown'), term, e);
      },

      select: function select(dropdown, selected, e) {
        return this._doSelect(dropdown, selected, e);
      },

      choose: function choose(dropdown, selection, e) {
        return this._doChoose(dropdown, selection, e);
      },

      handleKeydown: function handleKeydown(dropdown, e) {
        var onkeydown = this.get('onkeydown');
        if (onkeydown && onkeydown(this.get('publicAPI'), e) === false) {
          return;
        }
        if (e.keyCode === 38 || e.keyCode === 40) {
          // Up & Down
          return this._handleKeyUpDown(dropdown, e);
        } else if (e.keyCode === 13) {
          // ENTER
          return this._handleKeyEnter(dropdown, e);
        } else if (e.keyCode === 9) {
          //Tab
          return this._handleKeyTab(dropdown, e);
        } else if (e.keyCode === 27) {
          // ESC
          return this._handleKeyESC(dropdown, e);
        } else if (e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode === 32) {
          // Keys 0-9, a-z or SPACE
          return this._handleTriggerTyping(dropdown, e);
        }
      },

      handleFocus: function handleFocus(dropdown, event) {
        var action = this.get('onfocus');
        if (action) {
          action(this.get('publicAPI'), event);
        }
        this.get('eventSender').trigger('focus');
      },

      // It is not evident what is going on here, so I'll explain why.
      //
      // As of this writting, Ember doesn allow to yield data to the "inverse" block.
      // Because of that, elements of this component rendered in the trigger can't receive the
      // yielded object contaning the public API of the ember-basic-dropdown, with actions for open,
      // close and toggle.
      //
      // The only possible workaround for this is to on initialization inject a similar object
      // to the one yielded and store it to make it available in the entire component.
      //
      // This this limitation on ember should be fixed soon, this is temporary. Because of that this
      // object will be passed to the action from the inverse block like if it was yielded.
      //
      registerDropdown: function registerDropdown(dropdown) {
        this.set('registeredDropdown', dropdown);
      },

      handleOpen: function handleOpen(dropdown, e) {
        var action = this.get('onopen');
        if (action) {
          var returnValue = action(this.get('publicAPI'), e);
          if (returnValue === false || e && e.defaultPrevented) {
            return false;
          }
        }
        if (e) {
          this.set('openingEvent', e);
        }
        run.scheduleOnce('afterRender', this, this.scrollIfHighlightedIsOutOfViewport);
      },

      handleClose: function handleClose(dropdown, e) {
        var action = this.get('onclose');
        if (action) {
          var returnValue = action(this.get('publicAPI'), e);
          if (returnValue === false || e && e.defaultPrevented) {
            return false;
          }
        }
        if (e) {
          this.set('openingEvent', null);
        }
        this.send('highlight', dropdown, null, e);
      }
    },

    _handleKeyUpDown: function _handleKeyUpDown(dropdown, e) {
      if (dropdown.isOpen) {
        e.preventDefault();
        var newHighlighted = this.advanceSelectableOption(this.get('highlighted'), e.keyCode === 40 ? 1 : -1);
        this.send('highlight', dropdown, newHighlighted, e);
      } else {
        dropdown.actions.open(e);
      }
    },

    _handleKeyEnter: function _handleKeyEnter(dropdown, e) {
      if (dropdown.isOpen) {
        return this._doChoose(dropdown, this.get('highlighted'), e);
      }
    },

    _handleKeyTab: function _handleKeyTab(dropdown, e) {
      dropdown.actions.close(e);
    },

    _handleKeyESC: function _handleKeyESC(dropdown, e) {
      dropdown.actions.close(e);
    },

    // Methods
    scrollIfHighlightedIsOutOfViewport: function scrollIfHighlightedIsOutOfViewport() {
      if (!self.document) {
        return;
      }
      var optionsList = document.querySelector('.ember-power-select-options');
      if (!optionsList) {
        return;
      }
      var highlightedOption = optionsList.querySelector('.ember-power-select-option[aria-current="true"]');
      if (!highlightedOption) {
        return;
      }
      var optionTopScroll = highlightedOption.offsetTop - optionsList.offsetTop;
      var optionBottomScroll = optionTopScroll + highlightedOption.offsetHeight;
      if (optionBottomScroll > optionsList.offsetHeight + optionsList.scrollTop) {
        optionsList.scrollTop = optionBottomScroll - optionsList.offsetHeight;
      } else if (optionTopScroll < optionsList.scrollTop) {
        optionsList.scrollTop = optionTopScroll;
      }
    },

    indexOfOption: function indexOfOption(option) {
      return (0, _emberPowerSelectUtilsGroupUtils.indexOfOption)(this.get('results'), option);
    },

    optionAtIndex: function optionAtIndex(index) {
      return (0, _emberPowerSelectUtilsGroupUtils.optionAtIndex)(this.get('results'), index);
    },

    advanceSelectableOption: function advanceSelectableOption(activeHighlighted, step) {
      var resultsLength = this.get('resultsLength');
      var startIndex = Math.min(Math.max(this.indexOfOption(activeHighlighted) + step, 0), resultsLength - 1);
      var nextOption = this.optionAtIndex(startIndex);
      while (nextOption && get(nextOption, 'disabled')) {
        nextOption = this.optionAtIndex(startIndex += step);
      }
      return nextOption;
    },

    filter: function filter(options, term) {
      var skipDisabled = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      return (0, _emberPowerSelectUtilsGroupUtils.filterOptions)(options || [], term, this.get('optionMatcher'), skipDisabled);
    },

    defaultHighlighted: function defaultHighlighted() {
      var selected = this.get('resolvedSelected');
      if (!selected || this.indexOfOption(selected) === -1) {
        var nextOption = this.optionAtIndex(0);
        while (nextOption && nextOption.disabled) {
          nextOption = this.advanceSelectableOption(nextOption, 1);
        }
        return nextOption;
      }
      return selected;
    },

    buildSelection: function buildSelection(option) {
      return option;
    },

    _doChoose: function _doChoose(dropdown, selected, e) {
      if (e && e.clientY) {
        var openingEvent = this.get('openingEvent');
        if (openingEvent && openingEvent.clientY) {
          if (Math.abs(openingEvent.clientY - e.clientY) < 2) {
            return;
          }
        }
      }
      this.send('select', dropdown, this.get('buildSelection')(selected), e);
      if (this.get('closeOnSelect')) {
        dropdown.actions.close(e);
        return false;
      }
    },

    _doSelect: function _doSelect(dropdown, selected /*, e */) {
      if (this.get('resolvedSelected') !== selected) {
        this.get('onchange')(selected, this.get('publicAPI'));
      }
    },

    _doHighlight: function _doHighlight(dropdown, option) {
      if (option && get(option, 'disabled')) {
        return;
      }
      run.scheduleOnce('afterRender', this, this.scrollIfHighlightedIsOutOfViewport);
      this.set('currentlyHighlighted', option);
    },

    _doSearch: function _doSearch(dropdown, term) {
      var _this4 = this;

      if (isBlank(term)) {
        this._resetSearch();
      } else {
        var searchAction = this.get('search');
        if (searchAction) {
          this._performSearch(searchAction, term);
        } else {
          var options = this.get('options');
          if (options.then) {
            options.then(function (data) {
              _this4.setProperties({ results: _this4.filter(data, term), searchText: term, lastSearchedText: term });
            });
          } else {
            this.setProperties({ results: this.filter(options, term), searchText: term, lastSearchedText: term });
          }
        }
      }
    },

    _resetSearch: function _resetSearch() {
      var _this5 = this;

      var options = this.get('options') || [];
      this.activeSearch = null;
      if (options.then) {
        options.then(function (data) {
          _this5.setProperties({ results: data, searchText: '', lastSearchedText: '', loading: false });
        });
      } else {
        this.setProperties({ results: options, searchText: '', lastSearchedText: '', loading: false });
      }
    },

    _performSearch: function _performSearch(searchAction, term) {
      var _this6 = this;

      this.set('searchText', term);
      var search = searchAction(term, this.get('publicAPI'));
      if (!search) {
        this.setProperties({ lastSearchedText: term });
      } else if (search.then) {
        this.activeSearch = search;
        this.setProperties({ loading: true });
        search.then(function (results) {
          if (_this6.activeSearch === search) {
            _this6.setProperties({ results: results, lastSearchedText: term });
          }
        }, function () {
          if (_this6.activeSearch === search) {
            _this6.set('lastSearchedText', term);
          }
        });
      } else {
        this.setProperties({ results: search, lastSearchedText: term });
      }
    },

    _handleTriggerTyping: function _handleTriggerTyping(dropdown, e) {
      var term = this.get('expirableSearchText') + String.fromCharCode(e.keyCode);
      this.set('expirableSearchText', term);
      this.expirableSearchDebounceId = run.debounce(this, 'set', 'expirableSearchText', '', 1000);
      var firstMatch = this.filter(this.get('results'), term, true)[0]; // TODO: match only words starting with this substr?
      if (firstMatch !== undefined) {
        if (dropdown.isOpen) {
          this._doHighlight(dropdown, firstMatch, e);
        } else {
          this._doSelect(dropdown, firstMatch, e);
        }
      }
    }
  });
});