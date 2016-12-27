import Ember from 'ember';

// moved to shared addon
const photoSize = '75x75';
const ratingSelector = '.profile-tile__rating';

export default Ember.Component.extend({
  classNames: ['review-tile'],

  attributeBindings: ['tabindex'],

  tabindex: 0,

  model: null,

  profileImg: Ember.computed('model.user.photo', function () {
    const photo = this.get('model.user.photo');

    if (photo) {
      return photo.prefix + photoSize + photo.suffix;
    }

    return '/assets/images/default-profile.png';
  }),

  username: Ember.computed('model.user', function () {
    const lastName = this.get('model.user.lastName') || '';

    return `${this.get('model.user.firstName')} ${lastName}`;
  }),

  reviewText: Ember.computed('model.text', function () {
    return this.get('model.text');
  }),

  date: Ember.computed('model.createdAt', function () {
    return this.get('model.createdAt') * 1000;
  }),

  likeText: Ember.computed('model.likes', function () {
    return this.get('model.likes.summary');
  }),

  rating: Ember.computed('model', function () {
    const rating = this.get('model.rating') || Math.max((Math.random() * 5), 1.0);

    return parseFloat(rating, 10).toFixed(1);
  }),

  ratingColor: Ember.on('didRender', Ember.observer('rating', function () {
    const ratingPercentage = (this.get('rating') - 1) / 4;
    const green = (255 * ratingPercentage).toFixed(0);
    const red = (255 * (1 - ratingPercentage)).toFixed(0);

    this.$(ratingSelector).css('background', `rgb(${red}, ${green}, 0)`);
  }))
});
