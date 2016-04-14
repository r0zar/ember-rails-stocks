import Ember from 'ember';

export default Ember.Controller.extend({
  
  theStock: '',

  emailAddress: '',
  
  theStockChanged: Ember.observer('theStock', function() {
    console.log('theStock => ', this.get('theStock.name'));
  }),

  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),
  
  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  }),
 
  chartData: Ember.computed('theStock', function() {
    console.log('logging this jawn', this.get('theStock'));
    return {  
      labels: [ this.get('theStock.name')  ],
      datasets: [{
        data: [ this.get('theStock.lastSale') ] 
      }]
    };    
  }),

  actions: {
    chooseStock(stock) {
      this.set('theStock', stock);
    },
    saveInvitation() {

      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email});
      newInvitation.save();

      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  },

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid')

});
