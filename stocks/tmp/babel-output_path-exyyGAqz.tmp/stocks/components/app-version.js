define('stocks/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'stocks/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _stocksConfigEnvironment) {

  var name = _stocksConfigEnvironment['default'].APP.name;
  var version = _stocksConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});