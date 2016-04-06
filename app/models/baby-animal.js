import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  image: DS.attr('string'), //URL for image
  category: DS.attr('string')
});
