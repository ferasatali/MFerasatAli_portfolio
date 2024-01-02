<template>
  <v-app>
    <div ref="animation" class="animation">
      <div class="mt-4">
        <v-tabs v-model="tab" color="deep-white-accent-4" align-tabs="center" @update:model-value="setTab">
          <v-tab :value="1">Serving The Best
            <img src="@/assets/icons/linear/augur-(rep).svg" class="pl-7" />
          </v-tab>

          <v-tab :value="2">Experties Areas
            <img src="@/assets/icons/linear/dent-(dent).svg" class="pl-7" />
          </v-tab>

          <v-tab :value="3">AI Integration
            <img src="@/assets/icons/linear/civic-(cvc).svg" class="pl-7" />
          </v-tab>
          <v-tab :value="4">Our Services
            <img src="@/assets/icons/linear/wanchain-(wan).svg" class="pl-7" /></v-tab>
          <v-tab :value="5">Awards
            <img src="@/assets/icons/linear/nebulas-(nas).svg" class="pl-7" /></v-tab>
        </v-tabs>
      </div>
      <router-view />
    </div>
    <div class="mt-auto">
      <v-row align="center" class="px-10 mb-6 align-center justify-space-between">
        <v-col cols="12" class="d-flex align-center justify-space-between flex-wrap mb-0 pb-0">
          <div class="d-flex align-start" style="gap: 1rem">
            <img class="social-icons" src="@/assets/images/facebook-01.png" />
            <img class="social-icons" src="@/assets/images/instagram.png" />
            <img class="social-icons" src="@/assets/images/linkedin-02.png" />
            <img class="social-icons" src="@/assets/images/twitter.png" />
          </div>
          <img src="@/assets/icons/bold/happyemoji.svg" />
        </v-col>
        <v-col cols="12" class="d-flex align-center justify-center mt-0 pt-0">
          <v-btn variant="text" class="btn-explore" @click="close" prepend-icon="mdi-close">
            Close
          </v-btn>
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

const animation = ref(null);

onMounted(() => {
  gsap.to(animation.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
  });
});
const store = AppStore();
const tab = ref(1);
const setTab = (newTab: unknown) => {
  store.setExploreCurrentTab(newTab as number);
};
const close = async () => {
  await gsap.to(animation.value, {
    opacity: 1,
    delay: 0.6,
    x: "-50px",
    y: "1000",
  });
  router.back();
};
</script>

<style lang="scss" scoped>
.social-icons {
  border-radius: 17px;
  border: 2px solid #1c1439;
  padding: 5px;
}

.animation {
  transform: translateX(-200px) translateY(1000px);
  opacity: 0;
  display: none;
}

.btn-explore {
  font-size: 11px;
  text-align: center;
  position: fixed;
  bottom: 0;
}
</style>
