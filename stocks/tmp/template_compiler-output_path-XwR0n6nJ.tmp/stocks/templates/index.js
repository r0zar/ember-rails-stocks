export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 6
          },
          "end": {
            "line": 5,
            "column": 65
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
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"href","");
        var el2 = dom.createTextNode("Search View");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
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
            "line": 9,
            "column": 0
          },
          "end": {
            "line": 18,
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
        ["content","stock.symbol",["loc",[null,[17,11],[17,27]]]],
        ["content","stock.name",["loc",[null,[17,38],[17,52]]]]
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
          "line": 30,
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
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","well");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ul");
      dom.setAttribute(el2,"class","nav nav-pills");
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
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
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1]),1,1);
      morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6]),0,0);
      morphs[3] = dom.createMorphAt(fragment,8,8,contextualElement);
      morphs[4] = dom.createMorphAt(fragment,10,10,contextualElement);
      return morphs;
    },
    statements: [
      ["block","link-to",["index"],["tagName","li"],0,null,["loc",[null,[5,6],[5,77]]]],
      ["block","power-select",[],["options",["subexpr","@mut",[["get","model",["loc",[null,[10,10],[10,15]]]]],[],[]],"searchPlaceholder","Type to filter...","searchField","name","selected",["subexpr","@mut",[["get","target",["loc",[null,[13,11],[13,17]]]]],[],[]],"onchange",["subexpr","action",["chooseStock"],[],["loc",[null,[14,11],[14,33]]]]],1,null,["loc",[null,[9,0],[18,17]]]],
      ["content","target.symbol",["loc",[null,[20,3],[20,20]]]],
      ["inline","ember-chart",[],["type","Bar","data",["subexpr","@mut",[["get","chartData",["loc",[null,[24,7],[24,16]]]]],[],[]],"height",500,"width",800],["loc",[null,[22,0],[27,2]]]],
      ["content","outlet",["loc",[null,[29,0],[29,10]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));