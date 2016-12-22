import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['tabindex'],

  classNames: ['focus-header'],

  tabindex: -1,

  tagName: 'h2',

  didInsertElement() {
    this.$().focus();
  }
});
