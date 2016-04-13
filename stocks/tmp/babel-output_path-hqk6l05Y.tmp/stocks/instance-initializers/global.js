define("stocks/instance-initializers/global", ["exports"], function (exports) {
  exports.initialize = initialize;

  function initialize(application) {
    application.store = application.lookup("service:store");
    window.App = application;
  }

  exports["default"] = {
    name: 'global',
    initialize: initialize
  };
});