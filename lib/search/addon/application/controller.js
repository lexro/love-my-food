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
    }
  }
});
