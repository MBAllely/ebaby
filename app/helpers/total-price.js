import Ember from 'ember';

export function totalPrice(params) {
  var basketItems = params[0];
  var basketTotal = 0;

  basketItems.forEach(function(item) {
    basketTotal += item.get('price');
  });
  return basketTotal;
}

export default Ember.Helper.helper(totalPrice);
