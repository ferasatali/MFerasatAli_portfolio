<template>
  <section>
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex align-center justify-center flex-column mt-8">
        <p class="main-heading" ref="title1"></p>
        <p class="paragraph" ref="title2"></p>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center flex-wrap" style="gap: 2rem">
        <div class="d-flex base-card flex-column animation-div" ref="experties1">
          <p class="header-simple">Details and Images </p>
          <p class="main-heading1 mt-3">
            NRTS ( Final Year Project )
            <span class="sub-heading1 ml-2 d-flex justify-end">
              ( 08/2022 - 17-2023)
            </span>
          </p>
          <div class="px-3">
            <ul>
              <li>
                Integrate Recruitment portal for Hiring candidates
              </li>
              <li>
                Technologies: NodeJs, VueJs, Javascript, Google API, Express Js
              </li>
              <li>
                Work on Database and API's Integration
              </li>
              <li>
                Work on Backend and Frontend of the project.
              </li>
            </ul>
          </div>
          <div class="d-flex align-center justify-end ">
            <v-btn variant="text" class="text-capitalize" @click="onClick"> Project images <v-icon> {{ picture ?
              'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon> </v-btn>
          </div>
          <div class="d-flex align-center justify-center base-card mt-3" style="width:100%" v-if="picture">
            <v-carousel show-arrows="hover" height="400">
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
          </div>
          <v-divider thickness="2" color="blue" class="mt-3" />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center flex-wrap" style="gap: 2rem">
        <div class="d-flex base-card flex-column animation-second" ref="experties2">
          <p class="header-simple">Details and Images </p>
          <p class="main-heading1 mt-3">
            the95Star
            <span class="sub-heading1 ml-2 d-flex justify-end">
              ( 03/2022 - 07-2023)
            </span>
          </p>
          <div class="px-3">
            <ul>
              <li>
                Application used for Online Booking of cars
              </li>
              <li>
                Technologies: NodeJs, VueJs, Javascript, Google API, Express Js
              </li>
              <li>
                Work on Database and API's Integration
              </li>
              <li>
                Work on Backend and Frontend of the project.
              </li>
            </ul>
          </div>
          <div class="d-flex align-center justify-end ">
            <v-btn variant="text" class="text-capitalize" @click="onClick"> Project images <v-icon> {{ picture ?
              'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon> </v-btn>
          </div>
          <div class="d-flex align-center justify-center base-card mt-3" style="width:100%" v-if="picture">
            <v-carousel show-arrows="hover" height="400">
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
          </div>
          <v-divider thickness="2" color="blue" class="mt-3" />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center flex-wrap " style="gap: 2rem">
        <div class="d-flex base-card flex-column animation-last" ref="experties3">
          <p class="header-simple"> Details and Images </p>
          <p class="main-heading1 mt-3">
            HCMS
            <span class="sub-heading1 ml-2 d-flex justify-end">
              ( 07/2023 - Present)
            </span>
          </p>
          <div class="px-3">
            <ul>
              <li>
                Application used for Online Booking of cars
              </li>
              <li>
                Technologies: NodeJs, VueJs, Javascript, Google API, Express Js
              </li>
              <li>
                Work on Database and API's Integration
              </li>
              <li>
                Work on Backend and Frontend of the project.
              </li>
            </ul>
          </div>
          <div class="d-flex align-center justify-end ">
            <v-btn variant="text" class="text-capitalize" @click="onClick"> Project images <v-icon> {{ picture ?
              'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon> </v-btn>
          </div>
          <div class="d-flex align-center justify-center base-card mt-3" style="width:100%" v-if="picture">
            <v-carousel show-arrows="hover" height="400">
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
          </div>
          <v-divider thickness="2" color="blue" class="mt-3" />
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<!-- <v-btn variant="text" elevation="0" class="mt-3 learnmore text-capitalize">
            the95Star
          </v-btn> -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const title1 = ref(null);
const title2 = ref(null);
const experties1 = ref(null);
const experties2 = ref(null);
const experties3 = ref(null);
const picture = ref(false);
onMounted(() => {
  gsap.to(title1.value, {
    duration: 0.6,
    text: "Projects by Ferasat Ali",
    ease: "slow(0.7,0.7,false)",
    x: 0,
  });
  gsap.to(title2.value, {
    duration: 1,
    text: "Exploring diverse realms, my personal projects showcase creativity, innovation, and technical proficiency.",
    ease: "none",
    delay: 1,
  });
  gsap.to(experties1.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1
  });
  gsap.to(experties2.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1
  });
  gsap.to(experties3.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
    delay: 1
  });
});
const onClick = () => {
  picture.value = !picture.value;
};
</script>
<style lang="scss" scoped>
.base-card {
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;
}

.main-heading {
  font-size: 43px;
  font-weight: 600;
  transform: translateX(-400px);
}

.paragraph {
  font-size: 16px;
  font-weight: 300;
  color: #f8f8f8;
  display: flex;
  margin-left: 1rem;
  align-items: center;
  text-align: center;
}

.learnmore {
  font-size: 15px;
  font-weight: 600;
  color: #0e0ef9;
}

.animation {
  &-div {
    transform: translateX(-500px) translateY(-800px);
    opacity: 0;
    display: none;
  }

  &-second {
    transform: translateX(500px) translateY(-800px);
    opacity: 0;
    display: none;
  }

  &-last {
    transform: translateX(-600px) translateY(100px);
    opacity: 0;
    display: none;
  }
}
</style>
