import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('baby-animal-list', 'Integration | Component | baby animal list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{baby-animal-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#baby-animal-list}}
      template block text
    {{/baby-animal-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
