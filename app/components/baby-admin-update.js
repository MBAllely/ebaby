import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hideForm() {
      this.sendAction('hideUpdateForm');
    }
  }
});
