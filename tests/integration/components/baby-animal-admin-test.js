import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('baby-animal-admin', 'Integration | Component | baby animal admin', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{baby-animal-admin}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#baby-animal-admin}}
      template block text
    {{/baby-animal-admin}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
