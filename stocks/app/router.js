import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stocks');
  this.route('stock', { path: '/stocks/:stock_id' });
  this.route('about');
});

export default Router;
