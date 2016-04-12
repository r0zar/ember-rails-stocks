define('stocks/app', ['exports', 'ember', 'stocks/resolver', 'ember-load-initializers', 'stocks/config/environment'], function (exports, _ember, _stocksResolver, _emberLoadInitializers, _stocksConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _stocksConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _stocksConfigEnvironment['default'].podModulePrefix,
    Resolver: _stocksResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _stocksConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});