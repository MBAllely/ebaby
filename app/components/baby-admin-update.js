import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hideForm() {
      this.sendAction('hideUpdateForm');
    },
    save(baby) {
      var params = {
        name: this.get('baby.name'),
        price: this.get('baby.price'),
        description: this.get('baby.description'),
        image: this.get('baby.image'),
        category: this.get('baby.category')
      };
      this.sendAction('save', baby, params);
    }
  }
});
