import Ember from 'ember';

export default Ember.Object.extend({
  voteCount: Ember.computed('poll.votes.[].option', function() {
    return this.get('poll.votes').filterBy('option', this).length;
  })
});
