import { eq } from '../../../helpers/eq';
import { module, test } from 'qunit';

module('Unit | Helper | eq');

test('returns truthy with equivalent items', function(assert) {
  assert.ok(eq(['string', 'string']), 'it works with strings');
  assert.ok(eq([1, 1,]), 'it works with numbers');
  assert.ok(eq([0, 0]), 'it works with zeroes');
  assert.ok(eq([null , null]), 'it works with nulls');
});

test('returns falsy with inequivalent items', function(assert) {
  assert.notOk(eq(['string', 'different string']), 'it works with strings');
  assert.notOk(eq([1, 0]), 'it works with numbers');
  assert.notOk(eq([null , undefined]), 'it works with nulls');
});
