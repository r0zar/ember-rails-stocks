define('stocks/router', ['exports', 'ember', 'stocks/config/environment'], function (exports, _ember, _stocksConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _stocksConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('stocks');
  });

  exports['default'] = Router;
});