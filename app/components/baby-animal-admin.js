import Ember from 'ember';

export default Ember.Component.extend({
  updateShowing: false,
  actions: {
    deleteBabyAnimal(baby) {
      this.sendAction('deleteBabyAnimal', baby);
    },
    toggleUpdateShowing() {
      this.toggleProperty('updateShowing');
    }
  }
});
