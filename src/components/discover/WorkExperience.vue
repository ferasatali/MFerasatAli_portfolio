<template>
  <section>
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex align-center justify-center flex-column mt-8">
        <p class="main-heading" ref="title1"></p>
        <p class="paragraph" ref="title2"></p>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-center flex-wrap mt-6" style="gap: 2rem">
        <div class="d-flex base-card flex-column animation-div" ref="workExperienceAnimation">
          <p class="header-simple">Details</p>
          <div v-for="(experience, index) in experienceDetail" :key="index">
            <p class="main-heading1 mt-3">
              {{ index + 1 }} - {{ experience.companyName }}
              <span class="sub-heading1"> - {{ experience.role }} </span>
              <span class="sub-heading1 ml-2 d-flex justify-end">
                {{ experience.duration }}
              </span>
            </p>
            <div class="px-3">
              <ul v-for="(data, ind) in experience.content" :key="ind">
                <li>{{ data }}</li>
              </ul>
            </div>
            <v-divider thickness="2" color="blue" class="mt-3" />
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FerasatExperience } from "@/utils/ferasatExperiences";
import { getExperienceFromSheet } from "@/utils/googleSpreadSheetAPI";
import { IExperience } from "@/interfaces";


gsap.registerPlugin(TextPlugin);

const title1 = ref(null);
const title2 = ref(null);
const workExperienceAnimation = ref(null);
const experienceDetail = ref<IExperience.ExperiencePayload[]>([]);

onMounted(async () => {
  const experience = await getExperienceFromSheet();
  if (experience && experience.length) {
    experienceDetail.value = experience.reverse();
  }
  else
    experienceDetail.value = FerasatExperience.reverse();
  gsap.to(title1.value, {
    duration: 0.6,
    text: "Professional Experience",
    ease: "slow(0.7,0.7,false)",
    x: 0,
  });
  gsap.to(title2.value, {
    duration: 1,
    text: "Navigating Challenges and Driving Success in the Work Arena",
    ease: "none",
    delay: 1,
  });
  gsap.to(workExperienceAnimation.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
});
</script>
<style lang="scss" scoped>
.base-card {
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;

  @media (min-width: 1100px) {
    width: 70%;
  }
}

.main-heading {
  font-size: 43px;
  font-weight: 600;
  transform: translateX(-400px);
}

.paragraph {
  font-size: 16px;
  font-weight: 300;
  color: #f8f8f8;
  display: flex;
  margin-left: 1rem;
  align-items: center;
  text-align: center;
}

.learnmore {
  font-size: 15px;
  font-weight: 600;
  color: #0e0ef9;
}

.animation {
  &-div {
    transform: translateX(600px);
    opacity: 0;
    display: none;
  }

  &-last {
    transform: translateX(-600px) translateY(100px);
    opacity: 0;
    display: none;
  }
}
</style>
