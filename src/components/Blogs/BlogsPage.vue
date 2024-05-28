<template>
  <section>
    <div class="d-flex align-center justify-space-around mt-16">
      <h2 class="base-heading">
        Ferasat <span class="gradient-text"> Blogs </span>
      </h2>
      <div
        class="d-flex flex-row align-center"
        style="gap: 1rem"
        v-if="blogsData.length"
      >
        <!-- Button Left -->
        <v-btn
          class="icon"
          icon="mdi-arrow-left"
          @click="blogs('left')"
          style="z-index: 200"
        />
        <!-- Right Button -->
        <v-btn
          class="icon"
          icon="mdi-arrow-right"
          @click="blogs('left')"
          style="z-index: 200"
        />
      </div>
    </div>

    <v-row align="center" class="mt-md-16">
      <v-col
        cols="12"
        class="d-flex align-start align-center justify-center"
        style="gap: 3rem; height: 100%"
      >
        <div
          class="base-card card"
          v-for="(item, index) in blogsData"
          :key="index"
        >
          <!-- Blog feature img -->
          <div >
            <img width="100%" :src="item.src" :key="index" />
          </div>
          <!-- Blog title --> 
          <div class="mx-2">
            <p class="heading text-capitalize mt-2" v-html="item.title"></p>
          </div>
          <div class="d-flex align-center justify-space-between mt-2">
            <v-btn class="btn-read-more text-capitalize" variant="text">
              Read More
            </v-btn>
            <p class="base-body-text">
              {{ item.date }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { AllBlogs } from "@/utils/ferasatBlogs";

import { AppStore } from "@/store/app";
const store = AppStore();

const currentIndex = ref(0);
const displayCount = ref(3);

const blogsData = computed(() => {
  let data = AllBlogs;
  return data.slice(
    currentIndex.value,
    currentIndex.value + displayCount.value
  );
});
</script>


<style scoped lang="scss">
.heading {
  font-size: 17px;
  font-weight: 600;

  &-color {
    font-size: 43px;
    font-weight: 600;
    color: rgba(28, 176, 244, 0.619) !important;
  }
}

.card {
  width: 340px;
  min-height: 210px;

  &:hover {
    border: 2px solid #1d1e3b;
    cursor: pointer;
  }
}

.icon {
  color: white !important;
  border: 1px solid #fff !important;
  background: #06031b !important;
  box-shadow: 0px 8px 24px 0px rgba(103, 39, 236, 0.12) !important;

  &-disabled {
    border: 1px solid rgba(184, 154, 248, 0.2) !important;
    background: #06031b !important;
    box-shadow: 0px 8px 24px 0px rgba(103, 39, 236, 0.12) !important;
    cursor: not-allowed !important;
  }
}

.btn-read-more {
  color: #5fcfac !important;
  font-size: 12px;
}
.gradient-text {
  background: linear-gradient(146deg, #1c53f4 41.11%, #5fcfac 97.65%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>