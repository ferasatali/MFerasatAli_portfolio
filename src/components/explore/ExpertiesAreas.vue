<template>
  <section>
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-column mt-8"
      >
        <p class="main-heading" ref="title1"></p>
        <p class="paragraph" ref="title2"></p>
      </v-col>
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-wrap mt-6"
        style="gap: 2rem"
      >
        <div
          class="d-flex base-card flex-column animation-div"
          ref="experties1"
        >
          <!-- <v-divider thickness="2" color="blue"/> -->
          <p class="header-simple">Personal Projects</p>
          <p class="main-heading1 mt-3">
            - NRTS ( Final Year Project )
            <span class="sub-heading1 ml-2 d-flex justify-end">
              ( 08/2022 - 17-2023)
            </span>
          </p>
          <p class="paragraph mt-3">
            <ul>
              <li>
                Work on Backend and Frontend of the project.
              </li>
              <li>
                Work on Backend and Frontend of the project.
              </li>
              <li>
                Work on Backend and Frontend of the project.
              </li>
            </ul>

          </p>
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

onMounted(() => {
  gsap.to(title1.value, {
    duration: 0.6,
    text: "Areas of Our Experties",
    ease: "slow(0.7,0.7,false)",
    x: 0,
  });
  gsap.to(title2.value, {
    duration: 1,
    text: "Stay ahead of the game with HCMS - the ultimate tool for tracking talent performance in government, private, and educational settings.",
    ease: "none",
    delay: 1,
  });
  gsap.to(experties1.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
  gsap.to(experties3.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
    delay: 0.4,
  });
  gsap.to(experties2.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
});
</script>
<style lang="scss" scoped>
.base-card {
  width: 70%;
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
    transform: translateX(600px);
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
