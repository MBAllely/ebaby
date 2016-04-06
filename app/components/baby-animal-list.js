import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteBabyAnimal(baby) {
      this.sendAction('deleteBabyAnimal', baby);
    }
  }
});
