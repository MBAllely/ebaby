import Ember from 'ember';

export default Ember.Component.extend({
  basket: Ember.inject.service('basket'),
  totalPrice: Ember.computed('basket.items.[]', function() {
    return this.get('basket');
  })

});
