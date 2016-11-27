/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'search',

  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  },

   included: function() {
     this._super.included.apply(this, arguments);
   }
});
