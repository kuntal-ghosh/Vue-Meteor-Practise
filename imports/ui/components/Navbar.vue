<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    
    <b-navbar-brand href="#">
    <router-link :to="{ name: 'home' }" exact >YooSchool</router-link>

      </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
        <router-link :to="{ name: 'list' }" exact >Student List</router-link>
        </b-nav-item>
        <b-nav-item href="#">
        <router-link :to="{ name: 'user' }" exact >Add Student</router-link>
        </b-nav-item>
        <b-nav-item href="#">
        <router-link :to="{ name: 'subject' }" exact >Add Subject</router-link>
        </b-nav-item>
        <b-nav-item href="#">
                <router-link :to="{ name: 'subjectList' }" exact >Subject List</router-link>
        </b-nav-item>


        <!-- <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style scoped>

</style>>

</style>