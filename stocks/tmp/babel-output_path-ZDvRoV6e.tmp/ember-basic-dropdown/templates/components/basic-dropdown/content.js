define("ember-basic-dropdown/templates/components/basic-dropdown/content", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 3,
            "column": 6
          }
        },
        "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown/content.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'id');
        morphs[1] = dom.createAttrMorph(element0, 'class');
        morphs[2] = dom.createAttrMorph(element0, 'dir');
        morphs[3] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["attribute", "id", ["get", "dropdownId", ["loc", [null, [1, 10], [1, 20]]]]], ["attribute", "class", ["concat", ["ember-basic-dropdown-content ", ["get", "transitionClass", ["loc", [null, [1, 61], [1, 76]]]], " ", ["get", "dropdownClass", ["loc", [null, [1, 81], [1, 94]]]], " ", ["get", "verticalPositionClass", ["loc", [null, [1, 99], [1, 120]]]], " ", ["get", "horizontalPositionClass", ["loc", [null, [1, 125], [1, 148]]]]]]], ["attribute", "dir", ["get", "dir", ["loc", [null, [1, 158], [1, 161]]]]], ["content", "yield", ["loc", [null, [2, 2], [2, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});