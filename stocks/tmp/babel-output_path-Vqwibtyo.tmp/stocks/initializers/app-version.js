define('stocks/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'stocks/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _stocksConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_stocksConfigEnvironment['default'].APP.name, _stocksConfigEnvironment['default'].APP.version)
  };
});