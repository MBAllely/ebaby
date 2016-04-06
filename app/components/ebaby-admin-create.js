import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addBabyAnimal() {
      var params = {
        name: this.get('name') ? this.get('name') : "Elrond",
        price: this.get('price') ? this.get('price') : 5,
        description: this.get('description') ? this.get('description') : "A standard baby animal. Guaranteed fresh. Rainboots included.",
        image: this.get('image') ? this.get('image') : "https://s-media-cache-ak0.pinimg.com/736x/27/be/30/27be3032541b2567ac6fd686ee8618ce.jpg",
        category: this.get('category') ? this.get('category') : "Piglet"
      };
      this.sendAction('addBabyAnimal', params);
    }
  }
});
