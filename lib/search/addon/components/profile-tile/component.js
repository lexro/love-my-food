import Ember from 'ember';

const photoSize = '100x100';
const ratingSelector = '.profile-tile__rating';

export default Ember.Component.extend({
  classNames: ['profile-tile'],

  model: null,

  profileImg: Ember.computed('model', function () {
    const photos = this.get('model.featuredPhotos.items');
    if (photos && photos.length) {
      return photos[0].prefix + photoSize + photos[0].suffix;
    }
  }),

  name: Ember.computed('model', function () {
    return this.get('model.name');
  }),

  cuisineType: Ember.computed('model.categories', function () {
    return this.get('model.categories')[0].shortName;
  }),

  address: Ember.computed('model.location.formattedAddress', function () {
    const formattedAddress = this.get('model.location.formattedAddress');

    return formattedAddress[0] + ', ' + formattedAddress[1];
  }),

  rating: Ember.computed('model.rating', function () {
    const rating = this.get('model.rating').toFixed(1) || 0;
    return (rating / 2).toFixed(1); // to get 5 star rating
  }),

  price: Ember.computed('model', function () {
    const tier = this.get('model.price.tier');
    let price = '';

    for (let i = 0; i < tier; i++) {
      price += '$';
    }

    return price;
  }),

  hours: Ember.computed('model.hours', function () {
    return this.get('model.hours.status');
  }),

  displayIndex: Ember.computed('index', function () {
    return this.get('index') + 1 + '. ';
  }),

  ratingColor: Ember.on('didRender', Ember.observer('rating', function () {
    this.$(ratingSelector).css('background', `rgb(0, 0, 0)`);
  }))
});
