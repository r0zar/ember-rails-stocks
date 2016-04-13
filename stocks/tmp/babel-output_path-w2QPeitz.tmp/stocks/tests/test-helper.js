define('stocks/tests/test-helper', ['exports', 'stocks/tests/helpers/resolver', 'ember-qunit'], function (exports, _stocksTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_stocksTestsHelpersResolver['default']);
});