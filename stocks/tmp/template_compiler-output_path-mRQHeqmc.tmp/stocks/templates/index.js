export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "stocks/templates/index.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("strong");
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        return morphs;
      },
      statements: [
        ["content","stock.symbol",["loc",[null,[11,11],[11,27]]]],
        ["content","stock.name",["loc",[null,[11,38],[11,52]]]]
      ],
      locals: ["stock"],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
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
          "line": 19,
          "column": 0
        }
      },
      "moduleName": "stocks/templates/index.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Ember-Rails-Stocks!");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [4]);
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
      morphs[1] = dom.createMorphAt(element0,0,0);
      morphs[2] = dom.createMorphAt(element0,2,2);
      morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
      morphs[4] = dom.createMorphAt(fragment,8,8,contextualElement);
      return morphs;
    },
    statements: [
      ["block","power-select",[],["options",["subexpr","@mut",[["get","model",["loc",[null,[4,10],[4,15]]]]],[],[]],"searchPlaceholder","Type to filter...","searchField","name","selected",["subexpr","@mut",[["get","target",["loc",[null,[7,11],[7,17]]]]],[],[]],"onchange",["subexpr","action",["chooseStock"],[],["loc",[null,[8,11],[8,33]]]]],0,null,["loc",[null,[3,0],[12,17]]]],
      ["content","stock.symbol",["loc",[null,[14,4],[14,20]]]],
      ["content","stock.lastSale",["loc",[null,[14,21],[14,39]]]],
      ["inline","ember-chart",[],["type","Bar","data",["subexpr","@mut",[["get","chartData",["loc",[null,[16,30],[16,39]]]]],[],[]],"height",500,"width",800],["loc",[null,[16,0],[16,62]]]],
      ["content","outlet",["loc",[null,[18,0],[18,10]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));