<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" class="d-flex align-center justify-center">
        <ServingBest v-if="tab === 1" />
        <ExpertiesAreas v-else-if="tab === 2" />
        <AiIntegration v-else-if="tab === 3" />
        <OurServices v-else-if="tab === 4" />
        <AwardsPage v-else-if="tab === 5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ServingBest from "@/components/explore/ServingBest.vue";
import ExpertiesAreas from "@/components/explore/ExpertiesAreas.vue";
import AwardsPage from "@/components/explore/AwardsPage.vue";
import OurServices from "@/components/explore/OurServices.vue";
import AiIntegration from "@/components/explore/AiIntegration.vue";

import { AppStore } from "@/store/app";
import { computed } from "vue";
const store = AppStore();
const tab = computed(() => store.exploreCurrentTab);
</script>
