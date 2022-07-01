<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 text-center">
          <nuxt-img
            src="assets/img/avatar-without-bg.png"
            class="rounded-circle avatar-image"
          />
        </div>
        <div class="col-md-6">
          <h1 class="display-4">I'm Guglielmo Bartelloni</h1>
          <p class="paragrafo">
            Software Engineer and Music nerd based in Italy.
          </p>

          <div class="bottom-icons row">
            <a class="h2 col-2" href="https://github.com/guglielmobartelloni"><b-icon icon="github"></b-icon></a>
            <a class="h2 col-2" href="https://www.instagram.com/guglielmo_bartelloni/"><b-icon icon="instagram"></b-icon></a>
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-2"></div>
            <div class="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped>
.avatar-image {
  border: 8px dotted white;
  border-radius: 8000px;
  width: 60%;
}
.paragrafo {
  font-size: 18pt;
  font-weight: lighter;
  color: black;
}

.bottom-icons {
  color: black;
}
</style>