import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('baby-animal');
  },
  actions: {
    addBabyAnimal(params) {
      var newBaby = this.store.createRecord('baby-animal', params);
      newBaby.save();
      this.transitionTo('admin');
    }
  }
});
