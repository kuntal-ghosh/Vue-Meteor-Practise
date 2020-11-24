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
        label="Email address:"
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
    <label for="example-datepicker">Choose a date</label>
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

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
      name:"User",
    data() {
      return {
        form: {
          email: '',
          name: '',
          phone:'',
          date: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
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