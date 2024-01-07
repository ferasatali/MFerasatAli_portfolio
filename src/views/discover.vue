<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" class="d-flex align-center justify-center">
        <Education v-if="tab === 1" />
        <WorkExperience v-else-if="tab === 2" />
        <PersonalProject v-else-if="tab === 3" />
        <OurServices v-else-if="tab === 4" />
        <ContactMe v-else-if="tab === 5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Education from "@/components/discover/Education.vue";
import WorkExperience from "@/components/discover/WorkExperience.vue";
import OurServices from "@/components/discover/OurServices.vue";
import PersonalProject from "@/components/discover/PersonalProject.vue";
import ContactMe from "@/components/discover/ContactMe.vue";

import { AppStore } from "@/store/app";
import { computed } from "vue";
const store = AppStore();
const tab = computed(() => store.exploreCurrentTab);
</script>
