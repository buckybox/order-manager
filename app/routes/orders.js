import Ember from 'ember';
import $ from 'jquery';
import config from './../config/environment';

export default Ember.Route.extend({
  model: function() {
    return $.ajax({
      type: "GET",
      url: 'http://api.buckybox.local:3000/v1/orders?customer_id=639', // FIXME
      headers: {
        "API-Key": config.apiKey,
        "API-Secret": config.apiSecret,
        "Webstore-ID": config.webstoreId
      }
    });
  }
});
