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

      <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">update</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import {Students} from "../../api/students";

  export default {
      
    data() {
      return {
        form: {
            id:'',
          email: '',
          name: '',
          phone:'',
          date: '',
          // food: null,
          // checked: []
        },
        // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
     created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
    methods: {
        fetchData(){
             this.error = this.post = null;
      this.loading = true;
      const fetchedId = this.$route.params.id;
      console.log(fetchedId);
      const student = Students.findOne(fetchedId);
        if(!student) {
            throw new Meteor.Error("student not found");
        }
        console.log(student);
        this.form.id=fetchedId;
        this.form.email =student.email;
        this.form.name=student.name;
        this.form.phone=student.phone;
        this.form.date=student.date;
        }
        ,
      onSubmit(evt) {
        evt.preventDefault()
       const response =Meteor.call("students.update", this.form);
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