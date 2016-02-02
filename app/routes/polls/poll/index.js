import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    castVote(vote) {
      vote.save().then(() => {
        this.transitionTo('polls.poll.results');
      });
    },

    toggleOption(vote, option) {
      vote.toggleOption(option);
    }
  },

  model() {
    const poll = this.modelFor('polls.poll');
    return this.get('store').createRecord('vote', {
      poll: poll
    });
  }
});
