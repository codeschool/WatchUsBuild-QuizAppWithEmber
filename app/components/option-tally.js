import Ember from 'ember';

export default Ember.Component.extend({
  percentage: Ember.computed('option.voteCount', 'poll.voteCount', function() {
    const pollVoteCount = this.get('poll.voteCount');

    if (pollVoteCount <= 0) {
      return 0;
    } else {
      return this.get('option.voteCount') / this.get('poll.voteCount');
    }
  })
});
