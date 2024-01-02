<template>
  <v-app>
    <div class="app-container">
      <HeaderComponent />
      <DefaultView />
    </div>
    <div class="mt-auto d-flex align-center justify-center pt-7">
      <v-btn variant="text" class="btn-explore" to="/discover">
        Discover
        <template v-slot:prepend>
          <img src="@/assets/icons/linear/menu.svg" />
        </template>
      </v-btn>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import DefaultView from "./View.vue";
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss"; // Import your variable styles

.app-container {
  background: url("@/assets/images/Ellipse 1.png") center/cover no-repeat;
  min-height: 100vh;
  position: relative;
}

.btn-explore {
  border-radius: 81px;
  border: 2px solid #091235;
  font-size: 13px;
  color: #5fcfac !important;
  position: fixed;
  bottom: 0;
}
</style>
