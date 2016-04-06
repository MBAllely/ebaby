import Ember from 'ember';

export default Ember.Component.extend({
  updateShowing: false,
  actions: {
    deleteBabyAnimal(baby) {
      this.sendAction('deleteBabyAnimal', baby);
    },
    toggleUpdateShowing() {
      this.toggleProperty('updateShowing');
    },
    save(baby, params) {
      this.set('updateShowing', false);
      this.sendAction('save', baby, params);
    }
  }
});
