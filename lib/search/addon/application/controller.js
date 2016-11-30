import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCuisine(categoryID) {
      console.log('filter:', categoryID);
      this.transitionToRoute('index', {
        queryParams: {
          query: this.get('query'),
          location: this.get('location'),
          foodCategoryID: categoryID
        }
      });
    },

    filterByPrice(price) {
      console.log('filter:', price);
      this.transitionToRoute('index', {
        queryParams: {
          query: this.get('query'),
          location: this.get('location'),
          price: price
        }
      });
    },

    filterByOpen(isOpen) {
      console.log('filter:', isOpen);
      this.transitionToRoute('index', {
        queryParams: {
          query: this.get('query'),
          location: this.get('location'),
          openNow: isOpen
        }
      });
    },
  }
});
