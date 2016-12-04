import Ember from 'ember';
import request from 'ember-ajax/request';

// TODO: move to configuration file
const clientId = 'CLQDYGZG5C44ROYB1TPXIQSEWIYKMRPV3ECWXQNFXTL4RGO1';
const clientSecret = 'ZWO554H5ZTIPNCVJEFAO21JIW3AZCBD0VXPGX5TLJIUJZVBN';
const version = '20161101';

export default Ember.Route.extend({
  model(params) {
    const venueId = params.id;
    const url = `https://api.foursquare.com/v2/venues/${venueId}/tips?client_id=${clientId}&client_secret=${clientSecret}&v=${version}&sort=popular`;

    return request(url).then(data => {
      return {
        reviews: data.response.tips.items
      };
    });
  }
});
