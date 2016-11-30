import Ember from 'ember';

// from foursquare category response
const foodCategoryId = '4d4b7105d754a06374d81259';

export default Ember.Component.extend({
  classNames: ['result-filter'],

  foursquare: Ember.inject.service('foursquare'),

  cuisineTypes: null,

  priceTypes: ['$', '$$', '$$$', '$$$$'],

  cusineFilter: null,

  priceFilter: null,

  init() {
    this._super(...arguments);
    this.get('foursquare').categories().
      then((data) => {
        this.set('cuisineTypes', data);
      });
  },

  actions: {
    filterByCuisine(type) {
      if (!type) {
        // reset
        return this.sendAction('filterByCuisine', foodCategoryId);
      }

      const cuisineTypes = this.get('cuisineTypes');

      for(let i = 0; i < cuisineTypes.length; i++) {
        const cuisineType = cuisineTypes[i];

        if (cuisineType.name === type) {
          return this.sendAction('filterByCuisine', cuisineType.id);
        }
      }
    },

    filterByPrice(price) {
      if (!price) {
        // reset
        return this.sendAction('filterByPrice');
      }

      // TODO: allow multiple price filters
      return this.sendAction('filterByPrice', price.length);
    },

    filterByOpen(isOpen) {
      if (!isOpen) {
        // reset
        return this.sendAction('filterByOpen');
      } else {
        return this.sendAction('filterByOpen', true);
      }
    }
  }
});
