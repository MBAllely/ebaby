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
    },
    deleteBabyAnimal(baby) {
      if(confirm('Are you sure you want to delete this baby?')) {
        baby.destroyRecord();
      };
      this.transitionTo('admin');
    },
    save(baby, params) {
      Object.keys(params).forEach(function(key) {
        baby.set(key, params[key]);
      });
      baby.save();
    }
  }
});
