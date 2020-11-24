<template>
  <div className="container">
    <Navbar/>
    
    <main class="container mt-5">
      <User/>

    </main>
    
  </div>
</template>
 
<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Task from "./Task.vue";
import User from './User.vue'
import Navbar from './components/Navbar.vue'
 
export default {
  components: {
    User,
    Navbar
  },
  data() {
    return {};
  },
  methods: {
    getTasks() {
      return [
        { _id: 1, text: "This is task 1" },
        { _id: 2, text: "This is task 2" },
        { _id: 3, text: "This is task 3" }
      ];
    }
  }
};
</script>
<style >
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>