import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import App from '../imports/ui/App.vue';
import router from './router.js';
Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  });
});