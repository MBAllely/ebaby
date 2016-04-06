import Ember from 'ember';

export default Ember.Route.extend({
  basket: Ember.inject.service('basket'),
  model() {
    return this.store.findAll('baby-animal');
  }
});
