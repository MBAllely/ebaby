import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addBabyAnimal() {
      console.log("Your action is hooked up");
    }
  }
});
