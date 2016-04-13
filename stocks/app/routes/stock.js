import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    Ember.Logger.debug('json: ', this.store.query('stock', param));
    return this.store.query('stock', param);
  }
});
