define('stocks/tests/helpers/resolver', ['exports', 'stocks/resolver', 'stocks/config/environment'], function (exports, _stocksResolver, _stocksConfigEnvironment) {

  var resolver = _stocksResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _stocksConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _stocksConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});