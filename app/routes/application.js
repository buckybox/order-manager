import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    // `controller` is the instance of ApplicationController
    controller.set('title', "Hello world!");
  }
});

// TODO: send GET /ping regularly to detect lost connection
