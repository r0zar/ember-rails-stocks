import DS from 'ember-data';

export default DS.Model.extend({
  symbol: DS.attr('string'),
  name: DS.attr('string'),
  lastSale: DS.attr('number'),
  marketCap: DS.attr('number'),
  adrTso: DS.attr('number'),
  ipoYear: DS.attr('number'),
  sector: DS.attr('string'),
  industry: DS.attr('string'),
  summaryQuote: DS.attr('string')
});
