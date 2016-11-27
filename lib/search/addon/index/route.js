import Ember from 'ember';
import request from 'ember-ajax/request';

// TODO: move to configuration file
const clientId = 'CLQDYGZG5C44ROYB1TPXIQSEWIYKMRPV3ECWXQNFXTL4RGO1';
const clientSecret = 'ZWO554H5ZTIPNCVJEFAO21JIW3AZCBD0VXPGX5TLJIUJZVBN';
const version = '20161101';

export default Ember.Route.extend({
  model() {

    // TODO: user user entered query
    const query = 'cars';

    // TODO: use user entered location
    const location = encodeURIComponent('san francisco, ca');

    // TODO: get food categories for the user to filter
    const foodCategoryId = encodeURIComponent('4d4b7105d754a06374d81259');
    const options = {
    };
    const url = `https://api.foursquare.com/v2/venues/search?client_id=${clientId}&client_secret=${clientSecret}&v=${version}&query=${query}&near=${location}&categoryId=${foodCategoryId}`;

    return request(url, options).then(response => {
      return response;
    });
  }
});
