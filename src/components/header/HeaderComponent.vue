<template>
  <div class="d-flex align-center justify-space-between flex-wrap pa-4">
    <RouterLink to="/">
     <img width="65px" src="@/assets/45.png" class="mr-4" />
    </RouterLink>
    <v-spacer />
    <NavbarComponent class="ml-16" />
    <v-spacer />
    <div>
      <!-- <v-btn href="https://recruitment.hcms.ai/auth/login" target="_blank" color="text" variant="text"
        class="text-capitalize"> Login
      </v-btn> -->
      <v-btn  class="text-capitalize free-trail-btn"
        height="45px">
        Contact Me
      </v-btn>
    </div>
      <!-- <img width="130px" src="@/assets/mfa.png" / -->
      <!-- <img width="65px" src="@/assets/45.png" class="mr-4" /> -->
  </div>
</template>

<script setup lang="ts">
// import NavbarComponent from "./NavbarComponent.vue";
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.free-trail-btn {
  border: 2px solid map-get($map: $dark-colors, $key: "border");
  border-radius: 0.8rem;
  background: linear-gradient(180deg,
      rgba(28, 83, 244, 0.1) -52.63%,
      rgba(3, 0, 22, 0.54) 51.46%,
      rgba(28, 83, 244, 0.1) 142.11%),
    linear-gradient(0deg,
      map-get($map: $dark-colors, $key: "border"),
      map-get($map: $dark-colors, $key: "border"));
}
</style>
