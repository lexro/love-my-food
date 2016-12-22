import Ember from 'ember';

const photoSize = '75x75';

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
  })
});
