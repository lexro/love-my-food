import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('search');
  this.mount('reviews', { path: 'reviews/:id' });
});

export default Router;
