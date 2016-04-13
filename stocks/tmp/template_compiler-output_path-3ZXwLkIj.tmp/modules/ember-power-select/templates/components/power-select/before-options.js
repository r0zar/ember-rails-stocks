export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select/before-options.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ember-power-select-search");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2,"type","search");
        dom.setAttribute(el2,"autocomplete","off");
        dom.setAttribute(el2,"autocorrect","off");
        dom.setAttribute(el2,"autocapitalize","off");
        dom.setAttribute(el2,"spellcheck","false");
        dom.setAttribute(el2,"role","combobox");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'aria-controls');
        morphs[1] = dom.createAttrMorph(element0, 'placeholder');
        morphs[2] = dom.createAttrMorph(element0, 'oninput');
        morphs[3] = dom.createAttrMorph(element0, 'onkeydown');
        return morphs;
      },
      statements: [
        ["attribute","aria-controls",["get","listboxId",["loc",[null,[6,22],[6,31]]]]],
        ["attribute","placeholder",["get","searchPlaceholder",["loc",[null,[7,20],[7,37]]]]],
        ["attribute","oninput",["get","handleInput",["loc",[null,[8,16],[8,27]]]]],
        ["attribute","onkeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[9,16],[9,42]]]]]
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
          "line": 11,
          "column": 7
        }
      },
      "moduleName": "modules/ember-power-select/templates/components/power-select/before-options.hbs"
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
      ["block","if",[["get","searchEnabled",["loc",[null,[1,6],[1,19]]]]],[],0,null,["loc",[null,[1,0],[11,7]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));