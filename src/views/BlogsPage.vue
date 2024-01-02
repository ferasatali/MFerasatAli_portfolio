<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" class="d-flex align-center justify-space-between">
        <div>
          <p class="heading-color">Our Blog</p>
          <p class="sub-heading px-2">
            We would love to speak with you. Feel free to reach out using the
            below details.
          </p>
        </div>
        <div class="d-flex flex-row align-center" style="gap: 1rem">
          <v-btn density="comfortable" :class="currentIndex === 0 ? 'icon-disabled' : 'icon'"
            :disabled="currentIndex === 0" icon="mdi-arrow-left" @click="blogs('left')"></v-btn>
          <v-btn density="comfortable" class="icon" icon="mdi-arrow-right"
            :disabled="currentIndex + displayCount >= AllBlogs.length" @click="blogs('right')"></v-btn>
        </div>
      </v-col>
      <v-col class="d-flex align-center justify-center flex-wrap" style="gap: 3rem; height: 100%">
        <div @click="$router.push(item.url)" class="base-card" v-for="(item, index) in array" :key="index">
          <!-- Blog feature img -->
          <div>
            <v-img width="300px" :src="item.src" :key="index" />
          </div>
          <!-- Blog title -->
          <div>
            <p class="heading text-capitalize mt-2" v-html="item.title"></p>
          </div>
          <div class="d-flex align-center justify-space-between mt-2">
            <v-btn class="btn-read-more text-capitalize" variant="text" @click="$router.push(item.url)">
              Read More
            </v-btn>
            <p class="sub-heading">
              {{ item.date }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { AllBlogs } from "@/utils/blogs";
import { AppStore } from "@/store/app";
const store = AppStore();
import { useRouter } from "vue-router";
const router = useRouter();

const currentIndex = ref(0);
const displayCount = ref(3);

const blogs = (direction: string) => {
  if (direction === "left") {
    currentIndex.value = Math.max(0, currentIndex.value - displayCount.value);
  } else {
    currentIndex.value = Math.min(
      AllBlogs.length - displayCount.value,
      currentIndex.value + displayCount.value
    );
  }
};

onMounted(() => {
  store.setNavBar("Blogs");
});


const array = computed(() => {
  return AllBlogs.slice(
    currentIndex.value,
    currentIndex.value + displayCount.value
  );
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.heading {
  font-size: 17px;
  font-weight: 600;

  &-color {
    font-size: 43px;
    font-weight: 600;
    color: rgba(28, 176, 244, 0.619) !important;
  }
}

.base-card {
  width: 340px;
  min-height: 210px;
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;

  &:hover {
    border: 2px solid map-get($map: $dark-colors, $key: "border");
    cursor: pointer;
  }
}

.sub-heading {
  font-size: 14px;
  font-weight: 300;
  color: #54618b;
}

.icon {
  background-color: transparent !important;
  color: white !important;
  border: 2px solid white;
  border-radius: 18px;

  &-disabled {
    color: grey !important;
  }
}

.btn-read-more {
  color: #5fcfac !important;
  font-size: 12px;
}
</style>