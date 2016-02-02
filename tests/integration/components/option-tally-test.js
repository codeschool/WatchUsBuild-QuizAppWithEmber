import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('option-tally', 'Integration | Component | option-tally', {
  integration: true
});

test('properly displays with 0 votes', function(assert) {
  this.set('myOption', { voteCount: 0 });
  this.set('myPoll', { voteCount: 0 });

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '0 votes (0%)');
});

test('properly displays with all votes on the option', function(assert) {
  this.set('myOption', { voteCount: 5 });
  this.set('myPoll', { voteCount: 5 });

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '5 votes (100%)');
});

test('properly displays with partial votes on the option', function(assert) {
  this.set('myOption', { voteCount: 1 });
  this.set('myPoll', { voteCount: 3 });

  this.render(hbs`{{option-tally option=myOption poll=myPoll}}`);

  assert.equal(this.$().text().trim(), '1 votes (33%)');
});
