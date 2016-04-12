define('stocks/models/stock', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    symbol: _emberData['default'].attr('string'),
    name: _emberData['default'].attr('string'),
    lastSale: _emberData['default'].attr('number'),
    marketCap: _emberData['default'].attr('number'),
    adrTso: _emberData['default'].attr('number'),
    ipoYear: _emberData['default'].attr('number'),
    sector: _emberData['default'].attr('string'),
    industry: _emberData['default'].attr('string'),
    summaryQuote: _emberData['default'].attr('string')
  });
});