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
              "line": 20,
              "column": 2
            },
            "end": {
              "line": 34,
              "column": 2
            }
          },
          "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown.hbs"
        },
        isEmpty: false,
        arity: 0,
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
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","publicAPI",["loc",[null,[33,12],[33,21]]]]],[],["loc",[null,[33,4],[33,23]]]]
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
            "line": 19,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown.hbs"
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
        ["block","basic-dropdown/content",[],["to",["subexpr","@mut",[["get","wormholeDestination",["loc",[null,[21,7],[21,26]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[22,18],[22,31]]]]],[],[]],"appRoot",["subexpr","@mut",[["get","appRoot",["loc",[null,[23,12],[23,19]]]]],[],[]],"dropdownId",["subexpr","@mut",[["get","dropdownId",["loc",[null,[24,15],[24,25]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[25,18],[25,31]]]]],[],[]],"verticalPositionClass",["subexpr","@mut",[["get","_verticalPositionClass",["loc",[null,[26,26],[26,48]]]]],[],[]],"horizontalPositionClass",["subexpr","@mut",[["get","_horizontalPositionClass",["loc",[null,[27,28],[27,52]]]]],[],[]],"close",["subexpr","@mut",[["get","publicAPI.actions.close",["loc",[null,[28,10],[28,33]]]]],[],[]],"reposition",["subexpr","@mut",[["get","publicAPI.actions.reposition",["loc",[null,[29,15],[29,43]]]]],[],[]],"onFocusIn",["subexpr","action",["handleFocusIn"],[],["loc",[null,[30,14],[30,38]]]],"onFocusOut",["subexpr","action",["handleFocusOut"],[],["loc",[null,[31,15],[31,40]]]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[32,8],[32,11]]]]],[],[]]],0,null,["loc",[null,[20,2],[34,29]]]]
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
          "line": 36,
          "column": 0
        }
      },
      "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"aria-haspopup","true");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(17);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createAttrMorph(element0, 'aria-controls');
      morphs[2] = dom.createAttrMorph(element0, 'aria-describedby');
      morphs[3] = dom.createAttrMorph(element0, 'aria-disabled');
      morphs[4] = dom.createAttrMorph(element0, 'aria-expanded');
      morphs[5] = dom.createAttrMorph(element0, 'aria-invalid');
      morphs[6] = dom.createAttrMorph(element0, 'aria-label');
      morphs[7] = dom.createAttrMorph(element0, 'aria-labelledby');
      morphs[8] = dom.createAttrMorph(element0, 'aria-pressed');
      morphs[9] = dom.createAttrMorph(element0, 'aria-required');
      morphs[10] = dom.createAttrMorph(element0, 'id');
      morphs[11] = dom.createAttrMorph(element0, 'onfocus');
      morphs[12] = dom.createAttrMorph(element0, 'onkeydown');
      morphs[13] = dom.createAttrMorph(element0, 'role');
      morphs[14] = dom.createAttrMorph(element0, 'tabindex');
      morphs[15] = dom.createMorphAt(element0,1,1);
      morphs[16] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",["ember-basic-dropdown-trigger ",["get","triggerClass",["loc",[null,[1,43],[1,55]]]]]]],
      ["attribute","aria-controls",["get","dropdownId",["loc",[null,[2,18],[2,28]]]]],
      ["attribute","aria-describedby",["get","ariaDescribedBy",["loc",[null,[3,21],[3,36]]]]],
      ["attribute","aria-disabled",["get","disabled",["loc",[null,[4,18],[4,26]]]]],
      ["attribute","aria-expanded",["get","publicAPI.isOpen",["loc",[null,[5,18],[5,34]]]]],
      ["attribute","aria-invalid",["get","ariaInvalid",["loc",[null,[7,17],[7,28]]]]],
      ["attribute","aria-label",["get","ariaLabel",["loc",[null,[8,15],[8,24]]]]],
      ["attribute","aria-labelledby",["get","ariaLabelledBy",["loc",[null,[9,20],[9,34]]]]],
      ["attribute","aria-pressed",["get","publicAPI.isOpen",["loc",[null,[10,17],[10,33]]]]],
      ["attribute","aria-required",["get","ariaRequired",["loc",[null,[11,18],[11,30]]]]],
      ["attribute","id",["get","triggerId",["loc",[null,[12,7],[12,16]]]]],
      ["attribute","onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[13,10],[13,34]]]]],
      ["attribute","onkeydown",["subexpr","action",["keydown"],[],["loc",[null,[14,12],[14,32]]]]],
      ["attribute","role",["get","role",["loc",[null,[15,9],[15,13]]]]],
      ["attribute","tabindex",["get","tabIndex",["loc",[null,[16,13],[16,21]]]]],
      ["inline","yield",[],["to","inverse"],["loc",[null,[17,2],[17,24]]]],
      ["block","if",[["get","publicAPI.isOpen",["loc",[null,[19,6],[19,22]]]]],[],0,null,["loc",[null,[19,0],[35,7]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));