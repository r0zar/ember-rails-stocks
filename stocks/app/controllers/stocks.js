import Ember from 'ember';

export default Ember.Controller.extend({
  chartData: Ember.computed('model', function(){
    return {
      labels: [this.store.findRecord('stock', 9666).name],
      datasets: [{
        label: 'Stock Last Sale (USD)',
        data: ["10.00"] 
      }]
    };
  }),
  actions: {
    chooseStock(stock) {
      this.set('target',stock);
    }
  }
});
