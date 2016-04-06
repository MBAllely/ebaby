import Ember from 'ember';

export default Ember.Component.extend({
  basket: Ember.inject.service(),

  actions: {
    addToBasket(item) {
      this.get('basket').add(item);
      this.get('basket').isInBasket(item);
    }
  }
});
