<template>
  <div class="pa-3 navbar d-flex align-center flex-wrap cursor" v-if="mdAndUp">
    <a class="navbar-link" :class="{ 'white--text': activeLink === 'Home' }" @click="click('Home')">
      <span class="d-flex align-center justify-center flex-column">
        Home
        <img width="10" src="@/assets/icons/linear/Polygon 1.svg" v-if="activeLink === 'Home'" />
      </span>
    </a>
    <a class="navbar-link" :class="{ 'white--text': activeLink === 'ContactUs' }" @click="click('ContactUs')">
      <span class="d-flex align-center justify-center flex-column">
        Contact Us
        <img width="10" src="@/assets/icons/linear/Polygon 1.svg" v-if="activeLink === 'ContactUs'" />
      </span>
    </a>
    <a class="navbar-link" :class="{ 'white--text': activeLink === 'Blogs' }" @click="click('Blogs')">
      <span class="d-flex align-center justify-center flex-column">
        Blogs
        <img width="10" src="@/assets/icons/linear/Polygon 1.svg" v-if="activeLink === 'Blogs'" />
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { useRouter } from "vue-router";
import { AppStore } from "@/store/app";
const store = AppStore();

const { mdAndUp } = useDisplay();
const router = useRouter();

const click = (page: string) => {
  ["Home", "ContactUs", "Blogs"].includes(page) &&
    router.push({ name: page });
  store.setNavBar(page);
};

const activeLink = computed(() => {
  return store.getNavBar();
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.navbar {
  gap: 1rem;
  border: 2px solid map-get($map: $dark-colors, $key: "border");
  border-radius: 2rem;

  &-link {
    text-decoration: none;
    color: gray;
  }

  &-link.white--text {
    color: white;
  }
}

.cursor {
  cursor: pointer;
}
</style>