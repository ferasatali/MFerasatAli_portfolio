<template>
  <v-container>
    <!-- Template during loading -->

    <!-- Template if data found -->
    <template v-if="blogDetails">
      <!-- Header -->
      <VueGoBackHeader :title="blogDetails.title" />
      <v-row>
        <v-col cols="12" class="d-flex align-center justify-center mt-2">
          <v-img width="1000px" :src="blogDetails.src" />
        </v-col>
        <v-col cols="12">
          <div class="d-flex align-center justify-space-between">
            <p class="sub-heading">{{ blogDetails.date }}</p>
            <div class="d-flex align-center" style="gap: 1rem">
              <p class="sub-heading">Share on:</p>
              <img class="social-icons" src="@/assets/images/facebook-01.png" />
              <img class="social-icons" src="@/assets/images/instagram.png" />
              <img class="social-icons" src="@/assets/images/linkedin-02.png" />
              <img class="social-icons" src="@/assets/images/twitter.png" />
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="d-flex flex-column">
            <p class="mb-3 sub-heading" style="text-align: center" v-show="blogDetails.quotes"
              v-html="blogDetails.quotes">
            </p>
            <p class="mb-3 sub-heading" v-show="blogDetails.main" v-html="blogDetails.main"></p>
            <div v-for="(item, index) in blogDetails.content" :key="index">
              <p class="heading my-2" v-show="item.title" v-html="item.title"></p>
              <p class="sub-heading" v-show="item.text" v-html="item.text"></p>
            </div>
          </div>
        </v-col>
      </v-row>

    </template>

    <!-- Template if data not found -->
    <template v-else>
      <v-row>
        <v-col class="d-flex align-center justify-center">
          <p class="heading"> No blog found</p>
        </v-col>
      </v-row>
    </template>

  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { AllBlogs } from "@/utils/blogs";
import { useRoute } from "vue-router";
import { AppStore } from "@/store/app";
import VueGoBackHeader from "@/components/shared/VueGoBackHeader.vue";
import { IBlog } from "@/interfaces";

const store = AppStore();
const route = useRoute();
const blogDetails = ref<IBlog.BlogDetails | null>(null);
const notFound = ref(false);

onMounted(() => {
  store.setNavBar("Blogs"); //  Set navbar title
  const blogId = route.params.blog; // Get blog name from route params
  const blogData = AllBlogs.find((item) => item.id === blogId); // Get blog data from blog name
  if (blogData) {
    blogDetails.value = blogData;
  }
  else {
    // TODO: Navigate to 404 page
    notFound.value = true;
  }
});
const goBack = () => {
  window.history.back();
};
</script>

<style scoped lang="scss">
.heading {
  font-size: 15px;
  font-weight: 600;

  &-color {
    font-size: 43px;
    font-weight: 600;
    color: rgba(28, 176, 244, 0.619) !important;
    width: 80%;
  }
}

.base-card {
  width: 340px;
  min-height: 210px;
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;
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