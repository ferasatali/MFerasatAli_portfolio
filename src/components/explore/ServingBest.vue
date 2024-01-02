<template>
  <section id="serving-best">
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-column mt-9"
      >
        <p class="main-heading" ref="title1"></p>
        <p class="sub-heading" ref="title2"></p>
      </v-col>
      <v-col
        cols="12"
        class="d-flex align-center justify-center mt-7 flex-wrap"
        style="gap: 1rem"
      >
        <div
          class="base-card d-flex align-center justify-center card"
          ref="serving1"
        >
          <img src="@/assets/images/cropped-coloerd 1.svg" />
        </div>
        <div
          class="base-card d-flex align-center justify-center card-left"
          ref="serving2"
        >
          <img src="@/assets/images/SSA Logo 1.png" />
        </div>
      </v-col>
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-wrap"
        style="gap: 1rem"
      >
        <div
          class="base-card d-flex align-center justify-center card"
          ref="serving3"
        >
          <img src="@/assets/images/udacity-ar21 1.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center card-left"
          ref="serving4"
        >
          <img src="@/assets/images/Khalifa_University_New_Logo 1.png" />
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

onMounted(() => {
  gsap.to(title1.value, {
    duration: 0.6,
    text: "🧡Proudly Serving the Best 🧡",
    ease: "slow(0.7,0.7,false)",
    y: 3,
  });
  gsap.to(title2.value, {
    duration: 1,
    text: "Explore the clients Driving Business Transformation with Our HCM Solutions",
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
});
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

#serving-best {
  .base-card {
    width: 360px;
    height: 150px;
    padding: 1.75rem 1.5rem !important;
    background: #0a0b21 !important;
    box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
    border-radius: 20px !important;

    @media (max-width: map-get($breakpoints, "sm")) {
      width: 265px;
    }
  }

  .main-heading {
    font-size: 43px;
    font-weight: 600;
    transform: translateY(-116px);
  }

  .sub-heading {
    font-size: 14px;
    font-weight: 300;
    color: #54618b;
  }

  .card {
    transform: translateX(-1000px);
    opacity: 1;
    display: "none";

    &-left {
      transform: translateX(1000px);
      display: "none";
    }
  }
}
</style>
