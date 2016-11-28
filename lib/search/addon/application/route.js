import Ember from 'ember';
import request from 'ember-ajax/request';

// TODO: move to configuration file
const clientId = 'CLQDYGZG5C44ROYB1TPXIQSEWIYKMRPV3ECWXQNFXTL4RGO1';
const clientSecret = 'ZWO554H5ZTIPNCVJEFAO21JIW3AZCBD0VXPGX5TLJIUJZVBN';
const version = '20161101';
const foodCategoryId = '4d4b7105d754a06374d81259';

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    },
    location: {
      refreshModel: true
    },
    foodCategoryID: {
      refreshModel: true
    }
  },
  model(params) {
    console.log('changed:', params);
    let {query, location, foodCategoryID} = params;

    if (!query || !location) {
      return []; // TODO: show something to user
    }

    foodCategoryID = foodCategoryID || '4d4b7105d754a06374d81259';
    const url = `https://api.foursquare.com/v2/venues/explore?client_id=${clientId}&client_secret=${clientSecret}&v=${version}&query=${query}&near=${location}&categoryId=${foodCategoryID}&venuePhotos=1`;

    return request(url).then(data => {
      return {
        places: data.response.groups[0].items
      };
    });
  }
});
