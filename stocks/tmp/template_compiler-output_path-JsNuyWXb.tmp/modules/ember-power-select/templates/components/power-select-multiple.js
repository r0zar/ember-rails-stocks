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
              "line": 48,
              "column": 4
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","option",["loc",[null,[47,14],[47,20]]]],["get","term",["loc",[null,[47,21],[47,25]]]]],[],["loc",[null,[47,6],[47,27]]]]
        ],
        locals: ["option","term"],
        templates: []
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
              "line": 48,
              "column": 4
            },
            "end": {
              "line": 50,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[],["to","inverse"],["loc",[null,[49,6],[49,28]]]]
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
            "line": 51,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
        ["block","power-select",[],["afterOptionsComponent",["subexpr","@mut",[["get","afterOptionsComponent",["loc",[null,[3,28],[3,49]]]]],[],[]],"allowClear",["subexpr","@mut",[["get","allowClear",["loc",[null,[4,17],[4,27]]]]],[],[]],"ariaDescribedBy",["subexpr","@mut",[["get","ariaDescribedBy",["loc",[null,[5,22],[5,37]]]]],[],[]],"ariaInvalid",["subexpr","@mut",[["get","ariaInvalid",["loc",[null,[6,18],[6,29]]]]],[],[]],"ariaLabel",["subexpr","@mut",[["get","ariaLabel",["loc",[null,[7,16],[7,25]]]]],[],[]],"ariaLabelledBy",["subexpr","@mut",[["get","ariaLabelledBy",["loc",[null,[8,21],[8,35]]]]],[],[]],"beforeOptionsComponent",["subexpr","@mut",[["get","beforeOptionsComponent",["loc",[null,[9,29],[9,51]]]]],[],[]],"buildSelection",["subexpr","action",["buildSelection"],[],["loc",[null,[10,21],[10,46]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[11,12],[11,17]]]]],[],[]],"closeOnSelect",["subexpr","@mut",[["get","closeOnSelect",["loc",[null,[12,20],[12,33]]]]],[],[]],"destination",["subexpr","@mut",[["get","destination",["loc",[null,[13,18],[13,29]]]]],[],[]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[14,10],[14,13]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[15,15],[15,23]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[16,20],[16,33]]]]],[],[]],"extra",["subexpr","@mut",[["get","extra",["loc",[null,[17,12],[17,17]]]]],[],[]],"horizontalPosition",["subexpr","@mut",[["get","horizontalPosition",["loc",[null,[18,25],[18,43]]]]],[],[]],"initiallyOpened",["subexpr","@mut",[["get","initiallyOpened",["loc",[null,[19,22],[19,37]]]]],[],[]],"loadingMessage",["subexpr","@mut",[["get","loadingMessage",["loc",[null,[20,21],[20,35]]]]],[],[]],"matcher",["subexpr","@mut",[["get","matcher",["loc",[null,[21,14],[21,21]]]]],[],[]],"matchTriggerWidth",["subexpr","@mut",[["get","matchTriggerWidth",["loc",[null,[22,24],[22,41]]]]],[],[]],"noMatchesMessage",["subexpr","@mut",[["get","noMatchesMessage",["loc",[null,[23,23],[23,39]]]]],[],[]],"onchange",["subexpr","@mut",[["get","onchange",["loc",[null,[24,15],[24,23]]]]],[],[]],"onclose",["subexpr","@mut",[["get","onclose",["loc",[null,[25,14],[25,21]]]]],[],[]],"onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[26,14],[26,36]]]],"oninput",["subexpr","@mut",[["get","oninput",["loc",[null,[27,14],[27,21]]]]],[],[]],"onkeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[28,16],[28,40]]]],"onopen",["subexpr","action",["handleOpen"],[],["loc",[null,[29,13],[29,34]]]],"options",["subexpr","@mut",[["get","options",["loc",[null,[30,14],[30,21]]]]],[],[]],"optionsComponent",["subexpr","@mut",[["get","optionsComponent",["loc",[null,[31,23],[31,39]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[32,18],[32,29]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[33,20],[33,33]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[34,15],[34,23]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[35,13],[35,19]]]]],[],[]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[36,20],[36,33]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[37,18],[37,29]]]]],[],[]],"searchMessage",["subexpr","@mut",[["get","searchMessage",["loc",[null,[38,20],[38,33]]]]],[],[]],"searchPlaceholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[39,24],[39,41]]]]],[],[]],"selected",["subexpr","@mut",[["get","selected",["loc",[null,[40,15],[40,23]]]]],[],[]],"selectedItemComponent",["subexpr","@mut",[["get","selectedItemComponent",["loc",[null,[41,28],[41,49]]]]],[],[]],"tabindex",["subexpr","@mut",[["get","tabindex",["loc",[null,[42,15],[42,23]]]]],[],[]],"triggerClass",["subexpr","@mut",[["get","concatenatedTriggerClass",["loc",[null,[43,19],[43,43]]]]],[],[]],"triggerComponent",["subexpr","@mut",[["get","triggerComponent",["loc",[null,[44,23],[44,39]]]]],[],[]],"verticalPosition",["subexpr","@mut",[["get","verticalPosition",["loc",[null,[45,23],[45,39]]]]],[],[]]],0,1,["loc",[null,[2,2],[50,19]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 52,
              "column": 2
            },
            "end": {
              "line": 98,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","option",["loc",[null,[97,14],[97,20]]]],["get","term",["loc",[null,[97,21],[97,25]]]]],[],["loc",[null,[97,6],[97,27]]]]
        ],
        locals: ["option","term"],
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
            "line": 51,
            "column": 0
          },
          "end": {
            "line": 99,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
        ["block","power-select",[],["afterOptionsComponent",["subexpr","@mut",[["get","afterOptionsComponent",["loc",[null,[53,28],[53,49]]]]],[],[]],"allowClear",["subexpr","@mut",[["get","allowClear",["loc",[null,[54,17],[54,27]]]]],[],[]],"ariaDescribedBy",["subexpr","@mut",[["get","ariaDescribedBy",["loc",[null,[55,22],[55,37]]]]],[],[]],"ariaInvalid",["subexpr","@mut",[["get","ariaInvalid",["loc",[null,[56,18],[56,29]]]]],[],[]],"ariaLabel",["subexpr","@mut",[["get","ariaLabel",["loc",[null,[57,16],[57,25]]]]],[],[]],"ariaLabelledBy",["subexpr","@mut",[["get","ariaLabelledBy",["loc",[null,[58,21],[58,35]]]]],[],[]],"beforeOptionsComponent",["subexpr","@mut",[["get","beforeOptionsComponent",["loc",[null,[59,29],[59,51]]]]],[],[]],"buildSelection",["subexpr","action",["buildSelection"],[],["loc",[null,[60,21],[60,46]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[61,12],[61,17]]]]],[],[]],"closeOnSelect",["subexpr","@mut",[["get","closeOnSelect",["loc",[null,[62,20],[62,33]]]]],[],[]],"destination",["subexpr","@mut",[["get","destination",["loc",[null,[63,18],[63,29]]]]],[],[]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[64,10],[64,13]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[65,15],[65,23]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[66,20],[66,33]]]]],[],[]],"extra",["subexpr","@mut",[["get","extra",["loc",[null,[67,12],[67,17]]]]],[],[]],"horizontalPosition",["subexpr","@mut",[["get","horizontalPosition",["loc",[null,[68,25],[68,43]]]]],[],[]],"initiallyOpened",["subexpr","@mut",[["get","initiallyOpened",["loc",[null,[69,22],[69,37]]]]],[],[]],"loadingMessage",["subexpr","@mut",[["get","loadingMessage",["loc",[null,[70,21],[70,35]]]]],[],[]],"matcher",["subexpr","@mut",[["get","matcher",["loc",[null,[71,14],[71,21]]]]],[],[]],"matchTriggerWidth",["subexpr","@mut",[["get","matchTriggerWidth",["loc",[null,[72,24],[72,41]]]]],[],[]],"noMatchesMessage",["subexpr","@mut",[["get","noMatchesMessage",["loc",[null,[73,23],[73,39]]]]],[],[]],"onchange",["subexpr","@mut",[["get","onchange",["loc",[null,[74,15],[74,23]]]]],[],[]],"onclose",["subexpr","@mut",[["get","onclose",["loc",[null,[75,14],[75,21]]]]],[],[]],"onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[76,14],[76,36]]]],"oninput",["subexpr","@mut",[["get","oninput",["loc",[null,[77,14],[77,21]]]]],[],[]],"onkeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[78,16],[78,40]]]],"onopen",["subexpr","action",["handleOpen"],[],["loc",[null,[79,13],[79,34]]]],"options",["subexpr","@mut",[["get","options",["loc",[null,[80,14],[80,21]]]]],[],[]],"optionsComponent",["subexpr","@mut",[["get","optionsComponent",["loc",[null,[81,23],[81,39]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[82,18],[82,29]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[83,20],[83,33]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[84,15],[84,23]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[85,13],[85,19]]]]],[],[]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[86,20],[86,33]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[87,18],[87,29]]]]],[],[]],"searchMessage",["subexpr","@mut",[["get","searchMessage",["loc",[null,[88,20],[88,33]]]]],[],[]],"searchPlaceholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[89,24],[89,41]]]]],[],[]],"selected",["subexpr","@mut",[["get","selected",["loc",[null,[90,15],[90,23]]]]],[],[]],"selectedItemComponent",["subexpr","@mut",[["get","selectedItemComponent",["loc",[null,[91,28],[91,49]]]]],[],[]],"tabindex",["subexpr","@mut",[["get","tabindex",["loc",[null,[92,15],[92,23]]]]],[],[]],"triggerClass",["subexpr","@mut",[["get","concatenatedTriggerClass",["loc",[null,[93,19],[93,43]]]]],[],[]],"triggerComponent",["subexpr","@mut",[["get","triggerComponent",["loc",[null,[94,23],[94,39]]]]],[],[]],"verticalPosition",["subexpr","@mut",[["get","verticalPosition",["loc",[null,[95,23],[95,39]]]]],[],[]]],0,null,["loc",[null,[52,2],[98,19]]]]
      ],
      locals: [],
      templates: [child0]
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
          "line": 100,
          "column": 0
        }
      },
      "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
      ["block","if",[["subexpr","hasBlock",["inverse"],[],["loc",[null,[1,6],[1,26]]]]],[],0,1,["loc",[null,[1,0],[99,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));