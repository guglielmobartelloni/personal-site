<template>
  <b-navbar class="navbar-color container">
    <b-navbar-nav class="mr-auto">
        <b-nav-item to="/">Home</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml auto">
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/work">Work</b-nav-item>
        <b-nav-item to="/music">Music</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<style>
.navbar-color {
  background-color: #06d6a0;
  font-weight: 800;
}
.nuxt-link-exact-active {
    font-weight: bold;
    color: black !important;
}

</style>