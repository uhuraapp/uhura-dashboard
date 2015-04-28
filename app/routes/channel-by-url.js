import Ember from 'ember';

export default Ember.Route.extend({
  model: function (data) {
    var resourceURL = this.__adapter().buildURL('parser');
    return Ember.$.get(resourceURL + "/" + data.url);
  },
  afterModel: function (model) {
    if(model.url) {
      window.location.reload();
    }
  },
  __adapter: function() {
    return this.store.adapterFor('channel');
  }
});
