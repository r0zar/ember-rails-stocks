import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(key) {
    Ember.Logger.debug('The key is:', key);
    return Ember.String.decamelize(key);
  }
});
