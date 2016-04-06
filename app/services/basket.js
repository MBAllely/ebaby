import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  includes(item) {
    return this.get('items').includes(item);
  },
  isInBasket(baby) {
    this.get('items').forEach(function(item) {
      if(item.name === baby.name) {
        return "";
      }
    });
  }
});
