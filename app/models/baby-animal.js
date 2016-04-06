import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  image: DS.attr('string'), //URL for image
  category: DS.attr('string'),

  basket: Ember.inject.service(),
  inBasket: Ember.computed('basket.items.[]', function() {
    return this.get('basket').includes(this);
  })
});
