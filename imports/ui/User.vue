<template>
  <div className="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     

      <b-form-group id="name" label="Your Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

 <b-form-group
        id="input-group-1"
        label="Email Address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          v-on:input="onChange"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

          <b-form-group id="phone" label="Phone:" label-for="phone">
        <b-form-input
          id="phone"
          v-model="form.phone"
          type="number"
          required
          placeholder="Enter Phone"
        ></b-form-input>
      </b-form-group>

    <div class="mb-4">
    <label for="example-datepicker">Date of Birth</label>
    <b-form-datepicker id="example-datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>
  </div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
   
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import {Students} from "../api/students";

  export default {
      name:"User",
    data() {
      return {
        form: {
          email: '',
          name: '',
          phone:'',
          date: '',
          subjects: [],
          // food: null,
          // checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
       
      Meteor.call("students.insert", this.form);
      this.onReset(evt);

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
           this.form.phone = '';
        this.form.date = '';
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onChange: function()
      { 
          console.log("hello");
      }
    }
  }
</script>