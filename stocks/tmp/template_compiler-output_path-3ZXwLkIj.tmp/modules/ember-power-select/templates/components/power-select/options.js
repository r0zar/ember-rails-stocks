export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","ember-power-select-option");
          dom.setAttribute(el1,"role","option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","loadingMessage",["loc",[null,[3,56],[3,74]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","loadingMessage",["loc",[null,[2,8],[2,22]]]]],[],0,null,["loc",[null,[2,2],[4,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 6
              },
              "end": {
                "line": 21,
                "column": 6
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","option",["loc",[null,[20,16],[20,22]]]],["get","lastSearchedText",["loc",[null,[20,23],[20,39]]]]],[],["loc",[null,[20,8],[20,41]]]]
          ],
          locals: ["option"],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 23,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","ember-power-select-group");
          dom.setAttribute(el1,"role","option");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","ember-power-select-group-name");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
          morphs[1] = dom.createMorphAt(element1,3,3);
          return morphs;
        },
        statements: [
          ["content","opt.groupName",["loc",[null,[9,50],[9,67]]]],
          ["block","component",[["get","optionsComponent",["loc",[null,[10,19],[10,35]]]]],["highlighted",["subexpr","readonly",[["get","highlighted",["loc",[null,[11,30],[11,41]]]]],[],["loc",[null,[11,20],[11,42]]]],"selected",["subexpr","readonly",[["get","selected",["loc",[null,[12,27],[12,35]]]]],[],["loc",[null,[12,17],[12,36]]]],"options",["subexpr","readonly",[["get","opt.options",["loc",[null,[13,26],[13,37]]]]],[],["loc",[null,[13,16],[13,38]]]],"allOptions",["subexpr","readonly",[["get","allOptions",["loc",[null,[14,29],[14,39]]]]],[],["loc",[null,[14,19],[14,40]]]],"optionsComponent",["subexpr","readonly",[["get","optionsComponent",["loc",[null,[15,35],[15,51]]]]],[],["loc",[null,[15,25],[15,52]]]],"select",["subexpr","readonly",[["get","select",["loc",[null,[16,25],[16,31]]]]],[],["loc",[null,[16,15],[16,32]]]],"groupIndex",["subexpr","concat",[["get","groupIndex",["loc",[null,[17,27],[17,37]]]],["get","index",["loc",[null,[17,38],[17,43]]]],"."],[],["loc",[null,[17,19],[17,48]]]],"role","group","class","ember-power-select-options"],0,null,["loc",[null,[10,6],[21,20]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 2
            },
            "end": {
              "line": 32,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","ember-power-select-option");
          dom.setAttribute(el1,"role","option");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(5);
          morphs[0] = dom.createAttrMorph(element0, 'aria-selected');
          morphs[1] = dom.createAttrMorph(element0, 'aria-disabled');
          morphs[2] = dom.createAttrMorph(element0, 'aria-current');
          morphs[3] = dom.createAttrMorph(element0, 'data-option-index');
          morphs[4] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["attribute","aria-selected",["subexpr","ember-power-select-is-selected",[["get","opt",["loc",[null,[25,53],[25,56]]]],["get","selected",["loc",[null,[25,57],[25,65]]]]],[],["loc",[null,[25,20],[25,67]]]]],
          ["attribute","aria-disabled",["get","opt.disabled",["loc",[null,[26,22],[26,34]]]]],
          ["attribute","aria-current",["subexpr","eq",[["get","opt",["loc",[null,[27,24],[27,27]]]],["get","highlighted",["loc",[null,[27,28],[27,39]]]]],[],["loc",[null,[27,19],[27,41]]]]],
          ["attribute","data-option-index",["concat",[["get","groupIndex",["loc",[null,[28,27],[28,37]]]],["get","index",["loc",[null,[28,41],[28,46]]]]]]],
          ["inline","yield",[["get","opt",["loc",[null,[30,14],[30,17]]]],["get","lastSearchedText",["loc",[null,[30,18],[30,34]]]]],[],["loc",[null,[30,6],[30,36]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
      },
      isEmpty: false,
      arity: 2,
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
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","opt.groupName",["loc",[null,[7,8],[7,21]]]]],[],0,1,["loc",[null,[7,2],[32,9]]]]
      ],
      locals: ["opt","index"],
      templates: [child0, child1]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.4.4",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 34,
          "column": 0
        }
      },
      "moduleName": "modules/ember-power-select/templates/components/power-select/options.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","loading",["loc",[null,[1,6],[1,13]]]]],[],0,null,["loc",[null,[1,0],[5,7]]]],
      ["block","each",[["get","options",["loc",[null,[6,8],[6,15]]]]],[],1,null,["loc",[null,[6,0],[33,9]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));