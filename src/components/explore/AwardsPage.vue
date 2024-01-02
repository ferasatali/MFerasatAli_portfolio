<template>
  <section>
    <v-row align="center" justify="center">
      <v-col
        class="d-flex align-center justify-center flex-column mt-7"
        cols="12"
      >
        <p class="main-heading" ref="title1" />
        <p class="sub-heading px-16" ref="title2" />
      </v-col>
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-wrap mt-7 animation"
        style="gap: 1.2rem"
      >
        <div
          class="base-card d-flex align-center justify-center X"
          ref="animation1"
        >
          <img src="@/assets/images/udacity-ar21 1.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center X"
          ref="animation2"
        >
          <img src="@/assets/images/Khalifa_University_New_Logo 1.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center X"
          ref="animation3"
        >
          <img width="200" src="@/assets/images/Kt-1.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center X"
          ref="animation4"
        >
          <img src="@/assets/images/hub71-logo-black.png" />
        </div>
      </v-col>
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-wrap mt-7"
        style="gap: 1.2rem"
      >
        <div
          class="base-card d-flex align-center justify-center Y"
          ref="animation5"
        >
          <img width="200" src="@/assets/images/unnamed-1.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center Y"
          ref="animation6"
        >
          <img width="200" src="@/assets/images/artelligence.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center Y"
          ref="animation7"
        >
          <img width="200" src="@/assets/images/addathon.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center Y"
          ref="animation8"
        >
          <img src="@/assets/images/unnamed.png" />
        </div>
      </v-col>
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-wrap mt-7"
        style="gap: 1.2rem"
      >
        <div
          class="base-card d-flex align-center justify-center Y"
          ref="animation9"
        >
          <img src="@/assets/images/sandooq-al-watan.jpeg" />
        </div>
        <div
          class="base-card d-flex align-center justify-center Y"
          ref="animation10"
        >
          <img width="200" src="@/assets/images/haha.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center X"
          ref="animation11"
        >
          <img src="@/assets/images/unnamed (1).png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center X"
          ref="animation12"
        >
          <img width="200" src="@/assets/images/hackaton3.png" />
        </div>
        <div
          class="base-card d-flex align-center justify-center XY"
          ref="animation13"
        >
          <img width="200" src="@/assets/images/gulf.png" />
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";

const title1 = ref(null);
const title2 = ref(null);
const animation1 = ref(null);
const animation2 = ref(null);
const animation3 = ref(null);
const animation4 = ref(null);
const animation5 = ref(null);
const animation6 = ref(null);
const animation7 = ref(null);
const animation8 = ref(null);
const animation9 = ref(null);
const animation10 = ref(null);
const animation11 = ref(null);
const animation12 = ref(null);
const animation13 = ref(null);

onMounted(() => {
  gsap.to(title1.value, {
    duration: 0.6,
    text: "Our Achievments",
    ease: "slow(0.7,0.7,false)",
    y: 3,
  });
  gsap.to(title2.value, {
    duration: 1,
    text: "We were honored with the AI Innovation Award for our groundbreaking advancements in artificial intelligence and its practical applications.",
    ease: "none",
    delay: 0.2,
  });
  gsap.to(animation1.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 0.6,
  });
  gsap.to(animation2.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 0.5,
  });
  gsap.to(animation3.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 0.3,
  });
  gsap.to(animation4.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
  gsap.to(animation5.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    y: 1,
    delay: 0.6,
  });
  gsap.to(animation6.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    y: 1,
    delay: 0.5,
  });
  gsap.to(animation7.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    y: 1,
    delay: 0.3,
  });
  gsap.to(animation8.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    y: 1,
  });
  gsap.to(animation9.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    y: 1,
    delay: 0.6,
  });
  gsap.to(animation10.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    y: 1,
    delay: 0.5,
  });
  gsap.to(animation11.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    delay: 0.3,
  });
  gsap.to(animation12.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
  gsap.to(animation13.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
    delay: 1,
  });
});
</script>
<style lang="scss" scoped>
.base-card {
  width: 275px;
  height: 150px;
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;

  @media (max-width: 400px) {
    width: 340px;
  }
}

.animation {
  display: none;
  opacity: 1;

  .X {
    transform: translateX(-3000px);
  }

  .Y {
    transform: translateY(-1000px);
  }

  .XY {
    transform: translate(300px, -1000px);
  }
}

.main-heading {
  font-size: 43px;
  font-weight: 600;
}

.sub-heading {
  font-size: 14px;
  font-weight: 300;
  color: #54618b;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
