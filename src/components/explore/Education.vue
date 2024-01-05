<template>
  <section id="serving-best">
    <v-row align="center">
      <v-col cols="12" class="d-flex align-center justify-center flex-column mt-9">
        <p class="main-heading" ref="title1"></p>
        <p class="sub-heading" ref="title2"></p>
      </v-col>
      <v-col cols="6" class="d-flex align-center justify-center mt-7 flex-wrap" style="gap: 1rem">
        <div class="base-card card" ref="serving1">
          <div class="d-flex flex-column" style="gap: 0.6rem">
            <p class="header-simple">
              Matric <span class="main-sub-heading text"> - Science </span>
            </p>
            <p class="main-sub-heading">Laural Bank Public School (LPS)</p>
            <div class="d-flex justify-end">
              <p class="sub-heading text-whitew">01/2010 - 03/2018</p>
            </div>
          </div>
        </div>
        <div class="base-card card" ref="serving2">
          <div class="d-flex flex-column" style="gap: 0.6rem">
            <p class="header-simple">
              Intermediate
              <span class="main-sub-heading text"> - Science </span>
            </p>
            <p class="main-sub-heading">Punjab Group of Colleges (PGC)</p>
            <div class="d-flex justify-end">
              <p class="sub-heading text-whitew">01/2018 - 03/2019</p>
            </div>
          </div>
        </div>
        <div class="base-card card card-left" ref="serving3">
          <div class="d-flex flex-column" style="gap: 0.6rem">
            <p class="header-simple">
              Bachelors
              <span class="main-sub-heading text"> - Computer Science </span>
            </p>
            <p class="main-sub-heading">Univeristy of Central Punjab (UCP)</p>
            <div class="d-flex justify-end">
              <p class="sub-heading text-whitew">08/2019 - 08/2023</p>
            </div>
            <p class="main-sub-heading">CGPA: 3.4</p>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="base-card d-flex align-center flex-column card card-left" ref="serving4">
          <div class="d-flex flex-column" style="gap: 0.6rem">
            <p class="header-simple">
              Skills
            </p>
          </div>
          <div>
            <v-chip v-for="item in array" :key="item" class="ma-2"> {{ item }} </v-chip>
          </div>
          <div class="d-flex flex-column" style="gap: 0.6rem">
            <p class="header-simple">
              Interests
            </p>
          </div>
          <div>
            <v-chip v-for="item in interest" :key="item" class="ma-2"> {{ item }} </v-chip>
          </div>
        </div>

      </v-col>
    </v-row>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const title1 = ref(null);
const title2 = ref(null);
const serving1 = ref(null);
const serving2 = ref(null);
const serving3 = ref(null);
const serving4 = ref(null);
const serving5 = ref(null);
const array = ref(["JavaScript",
  "Node.js",
  "Vue.js",
  "Laravel",
  "C++",
  "Vuex",
  "TypeScript",
  "Vue.js",
  "Laravel",
  "C++",
  "Vuex",
  "TypeScript", "Vue.js",
  "Laravel",
  "C++",
  "Vuex",
  "TypeScript",
  "Python"]);
const interest = ref(["Cricket",
  "Reading",
  "Coding",
  "Netflix"]);
onMounted(() => {
  gsap.to(title1.value, {
    duration: 0.6,
    text: "Academic Journey",
    ease: "slow(0.7,0.7,false)",
    y: 3,
  });
  gsap.to(title2.value, {
    duration: 1,
    text: "Nurturing Knowledge, Empowering Futures",
    ease: "none",
    delay: 0.2,
  });
  gsap.to(serving1.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 0.5,
  });
  gsap.to(serving2.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 0.5,
  });
  gsap.to(serving3.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 0.7,
  });
  gsap.to(serving4.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 0.7,
  });
  gsap.to(serving5.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 1,
  });
});
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

#serving-best {
  .base-card {
    padding: 1.75rem 1.5rem !important;
    background: #0a0b21 !important;
    box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
    border-radius: 20px !important;
  }

  .card {
    transform: translateX(-1600px);
    opacity: 1;
    display: "none";

    &-left {
      transform: translateX(1600px);
      display: "none";
    }
  }

  .text {
    color: #90a4dd;

    &-white {
      color: #fff;
    }
  }
}
</style>
