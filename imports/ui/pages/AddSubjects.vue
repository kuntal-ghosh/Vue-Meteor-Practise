<template>
  <div className="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     

      <b-form-group id="name" label="Subject Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="form.subjectName"
          required
          placeholder="Enter Subject Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="name" label="Student Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="form.studentName"
          required
          placeholder="Enter Student Name"
        ></b-form-input>
      </b-form-group>
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

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import {Subjects} from '../../api/subjects';
import "../../api/subjects.js"
  export default {
      name:"User",
    data() {
      return {
        form: {
          subjectName: '',
          studentName: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        try {
         Meteor.call("subjects.insert", this.form);

        } catch (error) {
            console.log("error")
            console.log(error.messages);
        }
      this.onReset(evt);

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.subjectName = '';
        this.form.studentName='';
       
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