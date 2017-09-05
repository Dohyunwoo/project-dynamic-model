import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    var data = params.variable;
    return data;
  }
});
