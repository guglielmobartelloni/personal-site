<template>
<div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img src="assets/img/avatar-without-bg.png" class="rounded-circle avatar-image">
      </div>
      <div class="col-md-6">
        <h1 class="display-4">I'm Guglielmo Bartelloni</h1>
        <p class="paragrafo">Software Developer and Music lover based in Italy.</p>

        <font-awesome-icon :icon="['fas', 'home']"/>
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
.avatar-image{
  border: 8px dotted white;
  border-radius: 8000px;
  width: 80%;
}
.paragrafo{
  font-size: 18pt;
  font-weight: lighter;
  color: black;
}

</style>