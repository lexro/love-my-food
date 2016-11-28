import Ember from 'ember';
import request from 'ember-ajax/request';

// TODO: move to configuration file
const clientId = 'CLQDYGZG5C44ROYB1TPXIQSEWIYKMRPV3ECWXQNFXTL4RGO1';
const clientSecret = 'ZWO554H5ZTIPNCVJEFAO21JIW3AZCBD0VXPGX5TLJIUJZVBN';
const version = '20161101';
const foodCategoryId = '4d4b7105d754a06374d81259';
const url = `https://api.foursquare.com/v2/venues/categories?client_id=${clientId}&client_secret=${clientSecret}&v=${version}`;

export default Ember.Service.extend({
  foodCategories: null,

  categories() {
    const foodCategories = this.get('foodCategories');

    // return if we already have it
    if (foodCategories) {
      console.log('ok')
      return Ember.RSVP.resolve(foodCategories);
    }

    return request(url).then(data => {
      const categories = data.response.categories;

      // get top level sub-categories of the food category to
      // get list of food filters
      // TODO: flatten the category hierarchy
      for (let i = 0; i < categories.length; i++) {

        if (categories[i].id === foodCategoryId) {
          this.set('foodCategories', categories[i].categories);
          return categories[i].categories;
        }
      }
    });
  }
});
