import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPoll(poll) {
      poll.save().then(() => {
        return Ember.RSVP.all(poll.get('options').invoke('save'));
      }).then(() => {
        this.transitionTo('polls.poll', poll);
      });
    }
  },

  model() {
    const poll = this.get('store').createRecord('poll');
    const options = poll.get('options');
    options.createRecord();
    options.createRecord();
    options.createRecord();
    return poll;
  }
});
