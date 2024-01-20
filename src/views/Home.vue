<template>
  <div class="d-flex align-center justify-center flex-column home">
    <!-- Tagline -->
    <div class="home-tagline d-flex align-center justify-start py-3 px-4">
      <img width="30" src="@/assets/icons/stars.svg" alt="HCMS" />
      <p class="base-body-text">Introduction</p>
      <img width="30" src="@/assets/icons/stars.svg" alt="HCMS" />
    </div>
    <!-- Main heading -->
    <div class="d-flex align-center flex-row flex-wrap">
      <div class="image">
        <div class="base-card mr-md-4" ref="image">
          <img src="@/assets/mferasatali.png" alt="ferasat" />
        </div>
      </div>
      <div class="mt-5 mt-md-12 text-center home-title">
        <p class="base-title" ref="title1"></p>
        <p class="mt-4 base-title unique-title mt-2" ref="title2"></p>
      </div>
    </div>
    <!-- Description -->
    <p ref="description" class="base-body-text mt-5 mt-md-12 home-description text-center text-text"></p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const title1 = ref(null);
const title2 = ref(null);
const description = ref(null);
const image = ref(null);

onMounted(() => {
  gsap.to(image.value, {
    duration: 1,
    display: "block",
    opacity: 1,
    x: 1,
    y: 1,
    delay: 3,
  });
  gsap.to(title1.value, {
    duration: 2,
    text: "Muhammad Ferasat Ali",
    ease: "none",
    delay: 0.3
  });
  gsap.to(title2.value, {
    duration: 2,
    text: "Full Stack Software Engineer",
    ease: "none",
    delay: 0.1
  });
  gsap.to(description.value, {
    duration: 3,
    text: "A passionate Software Engineer and Web Developer based in Lahore, Pakistan. With expertise in building scalable web applications and acommitment to innovation, I bring a unique blend of technical skills and creativity to drive success in every project. <br /> Explore my journey through code and creativity below. Let's build something amazing together!",
    ease: "none",
    delay: 1,
  });
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "../../node_modules/vuetify/lib/styles/settings/_variables.scss";

.home {
  @media (min-width: 1800px) {
    margin-top: 3rem;
  }

  &-tagline {
    gap: 0.5rem;
    border-radius: 5rem;
    border: 2px solid map-get($map: $dark-colors, $key: "border");
    background: linear-gradient(177.98deg,
        rgba(28, 83, 244, 0.1) -94.88%,
        rgba(6, 3, 27, 0.5) 51.01%,
        rgba(28, 83, 244, 0.1) 146.6%),
      linear-gradient(0deg,
        map-get($map: $dark-colors, $key: "border"),
        map-get($map: $dark-colors, $key: "border"));
    box-shadow: 0px 4px 40px 0px rgba(103, 39, 236, 0.16);
    line-height: 1rem;
  }

  &-title {
    @media (max-width: 1100px) {
      width: 100%;
    }

    .unique-title {
      background: linear-gradient(180deg, #ffffff 9.77%, #0a0424 108.98%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      -moz-background-clip: text;
      -ms-background-clip: text;
    }
  }

  &-description {
    width: 70%;
  }
}

.base-card {
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;
  opacity: 0;
  display: none;
  transform: translateX(-200px) translateY(-50px);
}

.image {
  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
