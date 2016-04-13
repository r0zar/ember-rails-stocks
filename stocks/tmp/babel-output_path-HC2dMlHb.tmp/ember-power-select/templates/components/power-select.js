define("ember-power-select/templates/components/power-select", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 2
              },
              "end": {
                "line": 39,
                "column": 2
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            dom.setAttribute(el1, "class", "ember-power-select-options");
            dom.setAttribute(el1, "role", "listbox");
            var el2 = dom.createElement("li");
            dom.setAttribute(el2, "class", "ember-power-select-option ember-power-select-option--search-message");
            dom.setAttribute(el2, "role", "option");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 0]), 0, 0);
            return morphs;
          },
          statements: [["content", "searchMessage", ["loc", [null, [38, 152], [38, 169]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.4",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 40,
                    "column": 4
                  },
                  "end": {
                    "line": 42,
                    "column": 4
                  }
                },
                "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("      ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "yield", [], ["to", "inverse"], ["loc", [null, [41, 6], [41, 28]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.4.4",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 42,
                      "column": 4
                    },
                    "end": {
                      "line": 44,
                      "column": 4
                    }
                  },
                  "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("      ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("ul");
                  dom.setAttribute(el1, "class", "ember-power-select-options");
                  dom.setAttribute(el1, "role", "listbox");
                  var el2 = dom.createElement("li");
                  dom.setAttribute(el2, "class", "ember-power-select-option ember-power-select-option--no-matches-message");
                  dom.setAttribute(el2, "role", "option");
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n    ");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 0]), 0, 0);
                  return morphs;
                },
                statements: [["content", "noMatchesMessage", ["loc", [null, [43, 158], [43, 178]]]]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.4",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 42,
                    "column": 4
                  },
                  "end": {
                    "line": 44,
                    "column": 4
                  }
                },
                "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["block", "if", [["get", "noMatchesMessage", ["loc", [null, [42, 14], [42, 30]]]]], [], 0, null, ["loc", [null, [42, 4], [44, 4]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.4",
              "loc": {
                "source": null,
                "start": {
                  "line": 39,
                  "column": 2
                },
                "end": {
                  "line": 45,
                  "column": 2
                }
              },
              "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["subexpr", "hasBlock", ["inverse"], [], ["loc", [null, [40, 10], [40, 30]]]]], [], 0, 1, ["loc", [null, [40, 4], [44, 11]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.4",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 46,
                    "column": 4
                  },
                  "end": {
                    "line": 64,
                    "column": 4
                  }
                },
                "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
              },
              isEmpty: false,
              arity: 2,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("      ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "yield", [["get", "option", ["loc", [null, [63, 14], [63, 20]]]], ["get", "term", ["loc", [null, [63, 21], [63, 25]]]]], [], ["loc", [null, [63, 6], [63, 27]]]]],
              locals: ["option", "term"],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.4",
              "loc": {
                "source": null,
                "start": {
                  "line": 45,
                  "column": 2
                },
                "end": {
                  "line": 65,
                  "column": 2
                }
              },
              "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("  ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              return morphs;
            },
            statements: [["block", "component", [["get", "optionsComponent", ["loc", [null, [46, 17], [46, 33]]]]], ["allOptions", ["subexpr", "readonly", [["get", "results", ["loc", [null, [47, 27], [47, 34]]]]], [], ["loc", [null, [47, 17], [47, 35]]]], "aria-controls", ["subexpr", "readonly", [["get", "triggerId", ["loc", [null, [48, 30], [48, 39]]]]], [], ["loc", [null, [48, 20], [48, 40]]]], "class", "ember-power-select-options", "extra", ["subexpr", "readonly", [["get", "extra", ["loc", [null, [50, 22], [50, 27]]]]], [], ["loc", [null, [50, 12], [50, 28]]]], "groupIndex", "", "highlighted", ["subexpr", "readonly", [["get", "highlighted", ["loc", [null, [52, 28], [52, 39]]]]], [], ["loc", [null, [52, 18], [52, 40]]]], "id", ["subexpr", "readonly", [["get", "optionsId", ["loc", [null, [53, 19], [53, 28]]]]], [], ["loc", [null, [53, 9], [53, 29]]]], "lastSearchedText", ["subexpr", "readonly", [["get", "lastSearchedText", ["loc", [null, [54, 33], [54, 49]]]]], [], ["loc", [null, [54, 23], [54, 50]]]], "loading", ["subexpr", "readonly", [["get", "loading", ["loc", [null, [55, 24], [55, 31]]]]], [], ["loc", [null, [55, 14], [55, 32]]]], "loadingMessage", ["subexpr", "readonly", [["get", "loadingMessage", ["loc", [null, [56, 31], [56, 45]]]]], [], ["loc", [null, [56, 21], [56, 46]]]], "options", ["subexpr", "readonly", [["get", "results", ["loc", [null, [57, 24], [57, 31]]]]], [], ["loc", [null, [57, 14], [57, 32]]]], "optionsComponent", ["subexpr", "readonly", [["get", "optionsComponent", ["loc", [null, [58, 33], [58, 49]]]]], [], ["loc", [null, [58, 23], [58, 50]]]], "searchText", ["subexpr", "readonly", [["get", "searchText", ["loc", [null, [59, 27], [59, 37]]]]], [], ["loc", [null, [59, 17], [59, 38]]]], "select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [60, 23], [60, 32]]]]], [], ["loc", [null, [60, 13], [60, 33]]]], "selected", ["subexpr", "readonly", [["get", "resolvedSelected", ["loc", [null, [61, 25], [61, 41]]]]], [], ["loc", [null, [61, 15], [61, 42]]]]], 0, null, ["loc", [null, [46, 4], [64, 18]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 39,
                "column": 2
              },
              "end": {
                "line": 65,
                "column": 2
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "mustShowNoMessages", ["loc", [null, [39, 12], [39, 30]]]]], [], 0, 1, ["loc", [null, [39, 2], [65, 2]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 71,
              "column": 0
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["inline", "component", [["get", "beforeOptionsComponent", ["loc", [null, [26, 14], [26, 36]]]]], ["searchText", ["subexpr", "readonly", [["get", "searchText", ["loc", [null, [27, 25], [27, 35]]]]], [], ["loc", [null, [27, 15], [27, 36]]]], "onkeydown", ["subexpr", "readonly", [["get", "onkeydown", ["loc", [null, [28, 24], [28, 33]]]]], [], ["loc", [null, [28, 14], [28, 34]]]], "select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [29, 21], [29, 30]]]]], [], ["loc", [null, [29, 11], [29, 31]]]], "handleInput", ["subexpr", "action", ["handleInput"], [], ["loc", [null, [30, 16], [30, 38]]]], "searchPlaceholder", ["subexpr", "readonly", [["get", "searchPlaceholder", ["loc", [null, [31, 32], [31, 49]]]]], [], ["loc", [null, [31, 22], [31, 50]]]], "searchEnabled", ["subexpr", "readonly", [["get", "searchEnabled", ["loc", [null, [32, 28], [32, 41]]]]], [], ["loc", [null, [32, 18], [32, 42]]]], "highlighted", ["subexpr", "readonly", [["get", "highlighted", ["loc", [null, [33, 26], [33, 37]]]]], [], ["loc", [null, [33, 16], [33, 38]]]], "listboxId", ["subexpr", "readonly", [["get", "optionsId", ["loc", [null, [34, 24], [34, 33]]]]], [], ["loc", [null, [34, 14], [34, 34]]]], "extra", ["subexpr", "readonly", [["get", "extra", ["loc", [null, [35, 20], [35, 25]]]]], [], ["loc", [null, [35, 10], [35, 26]]]], "eventSender", ["subexpr", "@mut", [["get", "eventSender", ["loc", [null, [36, 16], [36, 27]]]]], [], []]], ["loc", [null, [26, 2], [36, 29]]]], ["block", "if", [["get", "mustShowSearchMessage", ["loc", [null, [37, 8], [37, 29]]]]], [], 0, 1, ["loc", [null, [37, 2], [65, 9]]]], ["inline", "component", [["get", "afterOptionsComponent", ["loc", [null, [66, 14], [66, 35]]]]], ["select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [67, 21], [67, 30]]]]], [], ["loc", [null, [67, 11], [67, 31]]]], "searchPlaceholder", ["subexpr", "readonly", [["get", "searchPlaceholder", ["loc", [null, [68, 32], [68, 49]]]]], [], ["loc", [null, [68, 22], [68, 50]]]], "searchEnabled", ["subexpr", "readonly", [["get", "searchEnabled", ["loc", [null, [69, 28], [69, 41]]]]], [], ["loc", [null, [69, 18], [69, 42]]]], "extra", ["subexpr", "readonly", [["get", "extra", ["loc", [null, [70, 20], [70, 25]]]]], [], ["loc", [null, [70, 10], [70, 26]]]]], ["loc", [null, [66, 2], [70, 28]]]]],
        locals: ["dropdown"],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 72,
                "column": 2
              },
              "end": {
                "line": 92,
                "column": 2
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "opt", ["loc", [null, [91, 12], [91, 15]]]], ["get", "term", ["loc", [null, [91, 16], [91, 20]]]]], [], ["loc", [null, [91, 4], [91, 22]]]]],
          locals: ["opt", "term"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 71,
              "column": 0
            },
            "end": {
              "line": 93,
              "column": 0
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "component", [["get", "triggerComponent", ["loc", [null, [72, 15], [72, 31]]]]], ["allowClear", ["subexpr", "readonly", [["get", "allowClear", ["loc", [null, [73, 25], [73, 35]]]]], [], ["loc", [null, [73, 15], [73, 36]]]], "buildSelection", ["subexpr", "readonly", [["get", "buildSelection", ["loc", [null, [74, 29], [74, 43]]]]], [], ["loc", [null, [74, 19], [74, 44]]]], "disabled", ["subexpr", "readonly", [["get", "disabled", ["loc", [null, [75, 23], [75, 31]]]]], [], ["loc", [null, [75, 13], [75, 32]]]], "extra", ["subexpr", "readonly", [["get", "extra", ["loc", [null, [76, 20], [76, 25]]]]], [], ["loc", [null, [76, 10], [76, 26]]]], "handleInput", ["subexpr", "action", ["handleInput"], [], ["loc", [null, [77, 16], [77, 38]]]], "lastSearchedText", ["subexpr", "readonly", [["get", "lastSearchedText", ["loc", [null, [78, 31], [78, 47]]]]], [], ["loc", [null, [78, 21], [78, 48]]]], "listboxId", ["subexpr", "readonly", [["get", "optionsId", ["loc", [null, [79, 24], [79, 33]]]]], [], ["loc", [null, [79, 14], [79, 34]]]], "loading", ["subexpr", "readonly", [["get", "loading", ["loc", [null, [80, 22], [80, 29]]]]], [], ["loc", [null, [80, 12], [80, 30]]]], "onkeydown", ["subexpr", "readonly", [["get", "onkeydown", ["loc", [null, [81, 24], [81, 33]]]]], [], ["loc", [null, [81, 14], [81, 34]]]], "options", ["subexpr", "readonly", [["get", "results", ["loc", [null, [82, 22], [82, 29]]]]], [], ["loc", [null, [82, 12], [82, 30]]]], "placeholder", ["subexpr", "readonly", [["get", "placeholder", ["loc", [null, [83, 26], [83, 37]]]]], [], ["loc", [null, [83, 16], [83, 38]]]], "searchEnabled", ["subexpr", "readonly", [["get", "searchEnabled", ["loc", [null, [84, 28], [84, 41]]]]], [], ["loc", [null, [84, 18], [84, 42]]]], "searchField", ["subexpr", "readonly", [["get", "searchField", ["loc", [null, [85, 26], [85, 37]]]]], [], ["loc", [null, [85, 16], [85, 38]]]], "searchText", ["subexpr", "readonly", [["get", "searchText", ["loc", [null, [86, 25], [86, 35]]]]], [], ["loc", [null, [86, 15], [86, 36]]]], "select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [87, 21], [87, 30]]]]], [], ["loc", [null, [87, 11], [87, 31]]]], "selected", ["subexpr", "readonly", [["get", "resolvedSelected", ["loc", [null, [88, 23], [88, 39]]]]], [], ["loc", [null, [88, 13], [88, 40]]]], "selectedItemComponent", ["subexpr", "readonly", [["get", "selectedItemComponent", ["loc", [null, [89, 36], [89, 57]]]]], [], ["loc", [null, [89, 26], [89, 58]]]]], 0, null, ["loc", [null, [72, 2], [92, 16]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 94,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "basic-dropdown", [], ["ariaDescribedBy", ["subexpr", "readonly", [["get", "ariaDescribedBy", ["loc", [null, [2, 28], [2, 43]]]]], [], ["loc", [null, [2, 18], [2, 44]]]], "ariaInvalid", ["subexpr", "readonly", [["get", "ariaInvalid", ["loc", [null, [3, 24], [3, 35]]]]], [], ["loc", [null, [3, 14], [3, 36]]]], "ariaLabel", ["subexpr", "readonly", [["get", "ariaLabel", ["loc", [null, [4, 22], [4, 31]]]]], [], ["loc", [null, [4, 12], [4, 32]]]], "ariaLabelledBy", ["subexpr", "readonly", [["get", "ariaLabelledBy", ["loc", [null, [5, 27], [5, 41]]]]], [], ["loc", [null, [5, 17], [5, 42]]]], "ariaRequired", ["subexpr", "readonly", [["get", "required", ["loc", [null, [6, 25], [6, 33]]]]], [], ["loc", [null, [6, 15], [6, 34]]]], "class", ["subexpr", "readonly", [["get", "concatenatedClasses", ["loc", [null, [7, 18], [7, 37]]]]], [], ["loc", [null, [7, 8], [7, 38]]]], "destination", ["subexpr", "readonly", [["get", "destination", ["loc", [null, [8, 24], [8, 35]]]]], [], ["loc", [null, [8, 14], [8, 36]]]], "dir", ["subexpr", "readonly", [["get", "dir", ["loc", [null, [9, 16], [9, 19]]]]], [], ["loc", [null, [9, 6], [9, 20]]]], "disabled", ["subexpr", "readonly", [["get", "disabled", ["loc", [null, [10, 21], [10, 29]]]]], [], ["loc", [null, [10, 11], [10, 30]]]], "dropdownClass", ["subexpr", "readonly", [["get", "concatenatedDropdownClasses", ["loc", [null, [11, 26], [11, 53]]]]], [], ["loc", [null, [11, 16], [11, 54]]]], "horizontalPosition", ["subexpr", "readonly", [["get", "horizontalPosition", ["loc", [null, [12, 31], [12, 49]]]]], [], ["loc", [null, [12, 21], [12, 50]]]], "initiallyOpened", ["subexpr", "@mut", [["get", "initiallyOpened", ["loc", [null, [13, 18], [13, 33]]]]], [], []], "matchTriggerWidth", ["subexpr", "@mut", [["get", "matchTriggerWidth", ["loc", [null, [14, 20], [14, 37]]]]], [], []], "onClose", ["subexpr", "action", ["handleClose"], [], ["loc", [null, [15, 10], [15, 32]]]], "onFocus", ["subexpr", "action", ["handleFocus"], [], ["loc", [null, [16, 10], [16, 32]]]], "onKeydown", ["subexpr", "action", ["handleKeydown"], [], ["loc", [null, [17, 12], [17, 36]]]], "onOpen", ["subexpr", "action", ["handleOpen"], [], ["loc", [null, [18, 9], [18, 30]]]], "registerActionsInParent", ["subexpr", "action", ["registerDropdown"], [], ["loc", [null, [19, 26], [19, 53]]]], "renderInPlace", ["subexpr", "readonly", [["get", "renderInPlace", ["loc", [null, [20, 26], [20, 39]]]]], [], ["loc", [null, [20, 16], [20, 40]]]], "tabindex", ["subexpr", "readonly", [["get", "tabindex", ["loc", [null, [21, 21], [21, 29]]]]], [], ["loc", [null, [21, 11], [21, 30]]]], "triggerClass", ["subexpr", "readonly", [["get", "concatenatedTriggerClasses", ["loc", [null, [22, 25], [22, 51]]]]], [], ["loc", [null, [22, 15], [22, 52]]]], "triggerId", ["subexpr", "@mut", [["get", "triggerId", ["loc", [null, [23, 12], [23, 21]]]]], [], []], "verticalPosition", ["subexpr", "readonly", [["get", "verticalPosition", ["loc", [null, [24, 29], [24, 45]]]]], [], ["loc", [null, [24, 19], [24, 46]]]]], 0, 1, ["loc", [null, [1, 0], [93, 19]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});