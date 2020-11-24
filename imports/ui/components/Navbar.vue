<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="#">YooLibrary</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item href="#">Student List</b-nav-item>
        <b-nav-item href="#">Add Student</b-nav-item>
        <b-nav-item href="#">Add Subject</b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
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