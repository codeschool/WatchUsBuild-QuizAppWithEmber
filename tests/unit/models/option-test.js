import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('option', 'Unit | Model | option', {
  needs: ['model:poll', 'model:vote']
});

test('voteCount is correct with a new vote added', function(assert) {
  const store = this.store();

  Ember.run(function() {
    const poll = store.createRecord('poll');
    const option = poll.get('options').createRecord();

    assert.equal(option.get('voteCount'), 0, 'it reports 0 voteCount with no votes');

    poll.get('votes').createRecord({ option: option });

    assert.equal(option.get('voteCount'), 1, 'it reports 1 voteCount after a vote');
  });
});

test('voteCount is correct with a vote removed', function(assert) {
  const store = this.store();

  Ember.run(function() {
    const poll = store.createRecord('poll');
    const option = poll.get('options').createRecord();
    const vote = poll.get('votes').createRecord({ option: option });

    assert.equal(option.get('voteCount'), 1, 'it reports 1 voteCount with a vote');

    poll.get('votes').removeObject(vote);

    assert.equal(option.get('voteCount'), 0, 'it reports 0 voteCount after vote removal');
  });
});

test('voteCount is correct when a vote changes', function(assert) {
  const store = this.store();

  Ember.run(function() {
    const poll = store.createRecord('poll');
    const option = poll.get('options').createRecord();
    const vote = poll.get('votes').createRecord();

    assert.equal(option.get('voteCount'), 0, 'it reports 0 before the vote is cast');

    vote.toggleOption(option);

    assert.equal(option.get('voteCount'), 1, 'it reports 1 after the vote is cast');
  });
});
