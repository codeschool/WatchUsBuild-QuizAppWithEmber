import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  label: DS.attr('string'),

  poll: DS.belongsTo('poll', { async: false }),

  voteCount: Ember.computed('poll.votes.@each.option', function() {
    return this.get('poll.votes').filterBy('option', this).length;
  })
});
