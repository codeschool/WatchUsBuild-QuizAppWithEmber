import { test } from 'qunit';
import moduleForAcceptance from 'quiz/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | voting on a poll');

test('all options are display unselected', function(assert) {
  visit('/polls/1');

  andThen(function() {
    assert.notOk(findWithAssert('.list--answer button:eq(0)').is('.is-selected'), 'button 1 is not selected');
    assert.notOk(findWithAssert('.list--answer button:eq(1)').is('.is-selected'), 'button 2 is not selected');
    assert.notOk(findWithAssert('.list--answer button:eq(2)').is('.is-selected'), 'button 3 is not selected');
  });
});

test('a button toggles selection', function(assert) {
  const buttonSelector = '.list--answer button:eq(0)';

  visit('/polls/1');
  click(buttonSelector);

  andThen(function() {
    assert.ok(findWithAssert(buttonSelector).is('.is-selected'), 'button 1 is selected after click');
  });

  click(buttonSelector);

  andThen(function() {
    assert.notOk(findWithAssert(buttonSelector).is('.is-selected'), 'button 1 is unselected after another click');
  });
});

test('casting a vote', function(assert) {
  visit('/polls/1');
  click('.list--answer button:eq(0)');
  click('.btn--vote');

  andThen(function() {
    assert.equal(currentURL(), '/polls/1/results', 'it transitions to the results page');

    assert.equal(findWithAssert('.list--answer li:eq(0)').text().trim(), 'Honesty');
    assert.equal(findWithAssert('.progress-info:eq(0)').text().trim(), '1 votes (100%)');

    assert.equal(findWithAssert('.list--answer li:eq(1)').text().trim(), 'Integrity');
    assert.equal(findWithAssert('.progress-info:eq(1)').text().trim(), '0 votes (0%)');
  });
});
