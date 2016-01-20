import Ember from 'ember';

export default Ember.Object.extend({
  optionsSorting: ['voteCount:desc'],
  sortedOptions: Ember.computed.sort('options', 'optionsSorting'),

  voteCount: Ember.computed.alias('votes.length')
});
