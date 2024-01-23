<template>
  <div class="d-flex align-center justify-space-between flex-wrap pa-4">
    <RouterLink to="/">
      <img width="100px" src="@/assets/mfa-logo.png" class="mr-4" />
    </RouterLink>
    <v-spacer />
    <div>
      <v-menu
        location="left"
        :close-on-content-click="false"
        v-model:model-value="open"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            class="text-capitalize free-trail-btn"
            height="45px"
            v-bind="props"
          >
            Connect With Ferasat
          </v-btn>
        </template>
        <div class="d-flex flex-column base-card base-card-card ml-4">
          <div class="d-flex align-center justify-center">
            <p class="header">Contact & Social Links</p>
          </div>
          <div
            class="d-flex flex-column mt-2 base-card base-card-menu"
            style="gap: 0.6rem"
          >
            <div class="d-flex align-center" style="gap: 0.6rem">
              <v-icon> mdi-email </v-icon>
              <p>ferasatali14@gmail.com</p>
            </div>
            <div class="d-flex align-center" style="gap: 0.6rem">
              <v-icon> mdi-phone </v-icon>
              <p>03424658936</p>
            </div>
          </div>
          <div
            class="d-flex align-center flex-row mt-3 base-card base-card-menu"
            style="gap: 0.6rem"
            v-for="(item,index) in contactMe"
            :key="index"
          >
            <img width="25px" class="social-icons" :src="item.icon" />
            <p>
              {{ item.name }} :
              <a :href="item.link" target="_blank"> MFerasatAli</a>
            </p>
          </div>
          <div class="d-flex flex-column mt-2 base-card base-card-menu">
            <v-btn
              variant="text"
              href="https://drive.google.com/file/d/1NKosJ2dj94GCBNEzmjgpjcA82yuKfUsp/view?usp=sharing"
              target="_blank"
            >
            <v-icon class="mr-2"> mdi-download </v-icon>
              Download Resume
            </v-btn>
          </div>
        </div>
      </v-menu>
    </div>
    <!-- <img width="130px" src="@/assets/mfa.png" / -->
    <!-- <img width="65px" src="@/assets/45.png" class="mr-4" /> -->
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
const open = ref(false);

// import NavbarComponent from "./NavbarComponent.vue";
const contactMe = ref([
  {
    name: "GitHub",
    link: "https://github.com/ferasatali",
    icon: "/github.png",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ali-ferasat-ali-7b1b3b1b0/",
    icon: "/linkedin-02.png",
  },
  {
    name: "GitHub Aslase",
    link: "https://github.com/fali-aslase",
    icon: "/github.png",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AliFerasat",
    icon: "/twitter.png",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mferasatali/",
    icon: "/instagram.png",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mferasatali",
    icon: "/facebook-01.png",
  },
]);
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/scrollbars.scss";

.free-trail-btn {
  border: 2px solid map-get($map: $dark-colors, $key: "border");
  border-radius: 0.8rem;
  background: linear-gradient(
      180deg,
      rgba(28, 83, 244, 0.1) -52.63%,
      rgba(3, 0, 22, 0.54) 51.46%,
      rgba(28, 83, 244, 0.1) 142.11%
    ),
    linear-gradient(
      0deg,
      map-get($map: $dark-colors, $key: "border"),
      map-get($map: $dark-colors, $key: "border")
    );
}
.base-card {
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;

  &-card {
    width: 350px;
    min-height: 460px;
    max-height: 480px;
    @media (max-width: 1300px) {
      min-height: 500px !important;
      max-height: 520px !important;
    }
    overflow-y: auto;
    @extend .base-scrollbar;
  }
  &-menu {
    background: #0f112b !important;
  }
}
</style>
