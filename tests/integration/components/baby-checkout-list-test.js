import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('baby-checkout-list', 'Integration | Component | baby checkout list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{baby-checkout-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#baby-checkout-list}}
      template block text
    {{/baby-checkout-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
