<template>
  <v-app>
    <div class="app-container">
      <HeaderComponent />
      <DefaultView />
    </div>
    <div class="mt-auto d-flex align-center justify-center pt-7">
      <v-tooltip text="Profile" location="start" theme="red" activator="parent">
        <template v-slot:activator="{ props }">
          <v-btn
            variant="text"
            class="btn-explore"
            @click="viewDetails"
            v-bind="props"
          >
            <template v-slot:prepend>
              <img src="@/assets/icons/linear/menu.svg" class="ml-2" />
            </template>
          </v-btn>
        </template>
      </v-tooltip>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import DefaultView from "./View.vue";
import { useRouter } from "vue-router";
import { onBeforeMount, onUnmounted, onBeforeUnmount } from "vue";

const router = useRouter();

onBeforeMount(() => {
  if (localStorage.getItem("page") == "discover") {
    router.push("/discover");
  }
});

const viewDetails = () => {
  localStorage.setItem("page", "discover");
  router.push("/discover");
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss"; // Import your variable styles

.app-container {
  background: url("@/assets/images/Ellipse 1.png") center/cover no-repeat;
  min-height: 100vh;
  position: relative;
}

.btn-explore {
  position: fixed;
  right: 0%;
  top: 50%;
  bottom: 50%;
  border: 2px solid map-get($map: $dark-colors, $key: "border") !important;
  border-radius: 0.8rem !important;
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
    ) !important;
}
</style>
