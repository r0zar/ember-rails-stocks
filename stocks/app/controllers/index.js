import Ember from 'ember';

export default Ember.Controller.extend({
  chartData: Ember.computed('model', function(){
    return {
      labels: this.get('model').mapBy('name'),
      datasets: [{
        label: 'Stock Price (USD)',
        data: this.get('model').mapBy('lastSale')
      }]
    };
  }),
  actions: {
    chooseStock(stock) {
      this.set('target',stock);
    }
  }
});
