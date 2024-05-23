<template>
  <v-app>
    <div ref="animation" class="animation">
      <div class="mt-4">
        <v-tabs
          v-model="tab"
          color="deep-white-accent-4"
          align-tabs="center"
          @update:model-value="setTab"
        >
          <v-tab :value="1"
            >Journey
            <img src="@/assets/icons/linear/augur-(rep).svg" class="pl-7" />
          </v-tab>

          <v-tab :value="2"
            >Experience
            <img src="@/assets/icons/linear/dent-(dent).svg" class="pl-7" />
          </v-tab>

          <v-tab :value="3"
            >Projects
            <img src="@/assets/icons/linear/civic-(cvc).svg" class="pl-7" />
          </v-tab>
          <v-tab :value="5"
            >Contact Me
            <img src="@/assets/icons/linear/wanchain-(wan).svg" class="pl-7"
          /></v-tab>
        </v-tabs>
      </div>
      <div style="max-width: 1700px; margin: 0 auto">
        <router-view />
      </div>
    </div>
    <div class="mt-auto">
      <v-row
        align="center"
        class="px-10 mb-6 align-center justify-space-between"
      >
        <v-col cols="12" class="d-flex align-center justify-center mt-0 pt-0">
          <v-tooltip text="Close" location="end" theme="primary" >
            <template v-slot:activator="{ props }">
              <v-btn
                variant="text"
                class="btn-explore"
                @click="close"
                v-bind="props"
              >
                <v-icon> mdi-close</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { AppStore } from "@/store/app";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRouter } from "vue-router";
const router = useRouter();

gsap.registerPlugin(TextPlugin);
const store = AppStore();
const tab = ref(1);
const animation = ref(null);

onMounted(() => {
  gsap.to(animation.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });

  localStorage.getItem("exploreCurrentTab")
    ? store.setExploreCurrentTab(
        Number(localStorage.getItem("exploreCurrentTab"))
      )
    : store.setExploreCurrentTab(1);
  tab.value = store.exploreCurrentTab;
});

const setTab = (newTab: unknown) => {
  localStorage.setItem("exploreCurrentTab", newTab as string);
  store.setExploreCurrentTab(newTab as number);
};
const close = async () => {
  localStorage.removeItem("page");
  await gsap.to(animation.value, {
    opacity: 1,
    delay: 0.6,
    x: "-2000px",
  });
  router.back();
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss"; // Import your variable styles

.social-icons {
  border-radius: 17px;
  border: 2px solid #1c1439;
  padding: 5px;
}

.animation {
  transform: translateX(1000px);
  opacity: 0;
  display: none;
}

.btn-explore {
  position: fixed;
  left: 0%;
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
