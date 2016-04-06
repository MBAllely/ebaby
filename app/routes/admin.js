import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addBabyAnimal(params) {
      var newBaby = this.store.createRecord('baby-animal', params);
      newBaby.save();
      this.transitionTo('admin');
    }
  }
});
