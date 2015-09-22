import Ember from 'ember';
import AuthenticationMixin from '../mixins/controllers/authentication';

export default Ember.Controller.extend(AuthenticationMixin, {
  actions: {
    authentication(provider) {
      this.authentication(provider);
    }
  }
});
