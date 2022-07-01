<template>
  <div>
    <div class="container mt-3">
      <nav class="navbar navbar-expand-md navbar-light bg-main">
        <nuxt-link class="navbar-brand" to="/">Home</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/about">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/work">Work</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/music">Music</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <Nuxt />
  </div>
</template>

<style>
.bg-main{
  background-color: #06D6A0;
}

</style>
