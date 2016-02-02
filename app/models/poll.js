import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  options: DS.hasMany('option', { async: false }),

  optionsSorting: ['voteCount:desc'],

  prompt: DS.attr('string'),

  sortedOptions: Ember.computed.sort('options', 'optionsSorting'),

  voteCount: Ember.computed.alias('votes.length'),

  votes: DS.hasMany('vote', { async: false })
});
