<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col text-center" data-aos="zoom-in">
          <h1 class="display-4">I'm Guglielmo Bartelloni</h1>
          <p class="paragrafo">
            Software Engineer and Music nerd based in Italy.
          </p>

          <div class="d-flex justify-content-center">
            <a
              class="h2 text-dark"
              href="https://github.com/guglielmobartelloni"
              ><b-icon icon="github"></b-icon
            ></a>
            <a
              class="h2 text-dark ml-5"
              href="https://www.instagram.com/guglielmo_bartelloni/"
              ><b-icon icon="instagram"></b-icon
            ></a>
          </div>
        </div>
      </div>
   
      <div class="row mt-5" data-aos="fade-up">
        <div class="col-md-6">
          <h1>About me</h1>
          <p id="about" class="font-weight-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nemo facere, labore, quos earum in asperiores a exercitationem
            quibusdam tempore non quisquam repellat consequatur veniam nobis
            doloribus molestias suscipit accusantium fugiat qui, eum soluta.
          </p>
        </div>
        <div class="col-md-6 text-center order-first order-md-last">
          <nuxt-img
            src="assets/img/avatar-without-bg-min.png"
            height="600"
            width="600"
            class="rounded-circle border img-fluid"
          />
        </div>
      </div>
      <div class="row mt-5 mb-2">
        <div class="col"><h1>Tech I use</h1></div>
      </div>
      <div class="row">
        <div class="col-md-6 text-center" data-aos="fade-right">
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://picsum.photos/300/200"
                class="border shoadow img-fluid"
              />
            </div>
            <div class="col-md-6">
              <img
                src="https://picsum.photos/300/200"
                class="border shoadow img-fluid"
              />
            </div>
          </div>
          <div class="row my-2">
            <div class="col-md-6">
              <img
                src="https://picsum.photos/300/200"
                class="border shoadow img-fluid"
              />
            </div>
            <div class="col-md-6">
              <img
                src="https://picsum.photos/300/200"
                class="border shoadow img-fluid"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <img
                src="https://picsum.photos/300/200"
                class="border shoadow img-fluid"
              />
            </div>
            <div class="col-md-6">
              <img
                src="https://picsum.photos/300/200"
                class="border shoadow img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 justify-content-center" data-aos="fade-left">
          <p id="about" class="font-weight-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nemo facere, labore, quos earum in asperiores a exercitationem
            quibusdam tempore non quisquam repellat consequatur veniam nobis
            doloribus molestias suscipit accusantium fugiat qui, eum soluta.
          </p>
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

#about {
  /* max-width: 50ch; */
  line-height: 2.5ch;
  font-size: 19pt;
}

img {
  width: 55%;
}
</style>