import Ember from 'ember';

export default Ember.Controller.extend({
  chartData: Ember.computed('model', function(){
    return {
      labels: ["Stock X"],
      datasets: [{
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
