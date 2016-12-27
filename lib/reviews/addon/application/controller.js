import Ember from 'ember';

export default Ember.Controller.extend({
  rating: 1,

  reviewText: '',

  reviews: Ember.computed('model.reviews', function () {
    const reviews = this.get('model.reviews');
    return reviews;
  }),

  actions: {
    submitReview() {
      let rating = this.get('rating');
      let reviewText = this.get('reviewText');
      let reviews = this.get('reviews');

      // how to trigger computed property update/rerender
      // without creating new array
      reviews = [{
        user: {
          firstName: 'anonymous'
        },
        text: reviewText,
        createdAt: Date.now() / 1000,
        rating: rating
      }].concat(reviews);

      this.set('reviews', reviews);
    }
  }
});
