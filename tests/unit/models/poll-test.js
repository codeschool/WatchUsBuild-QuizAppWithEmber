import { moduleForModel, test } from 'ember-qunit';

moduleForModel('poll', 'Unit | Model | poll', {
  // Specify the other units that are required for this test.
  needs: ['model:option', 'model:vote']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
