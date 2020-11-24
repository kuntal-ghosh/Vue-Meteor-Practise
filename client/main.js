import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import App from '../imports/ui/App.vue';
import router from './router.js';
 
Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  });
});