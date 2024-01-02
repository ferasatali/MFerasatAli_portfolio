<template>
  <v-container fluid id="our-services">
    <v-row align="center" class="center-class">
      <v-col class="d-flex flex-column cursor" cols="12" sm="7">
        <div ref="service" class="service">
          <p class="main-heading">Our Services</p>
          <p class="sub-heading px-2">
            We offer the best accounting and expense tracking for ambitious
            businesses
          </p>
        </div>
        <div ref="service1" class="service1">
          <div class="mt-10" @click="toggleDetail(0)">
            <p class="d-flex align-center justify-space-between">
              Job Posting Enhancer
              <v-icon @click="toggleDetail(0)" v-if="!xs">
                {{ select === 0 ? "mdi-minus" : "mdi-plus" }}
              </v-icon>
            </p>
            <p v-if="select === 0" class="sub-heading mt-2 pr-7">
              Our Job Poster Enhancer Service gives your scale-up tactics a shot
              in the arm by helping you create job postings that stand out and
              draw in the right candidates. Don’t settle for mediocre results.
              Unlock the power of AI and take your hiring strategy to new
              heights with this service!
            </p>
          </div>
          <v-divider color="success" :thickness="2" class="my-5" />
          <div class="mt-3" @click="toggleDetail(1)">
            <p class="d-flex align-center justify-space-between">
              Syllabi Clinic
              <v-icon @click="toggleDetail(1)" v-if="!xs">
                {{ select === 1 ? "mdi-minus" : "mdi-plus" }}
              </v-icon>
            </p>
            <p v-if="select === 1" class="sub-heading mt-2">
              A trusted resource for educators and instructional designers
              seeking to create exceptional course syllabi. Our clinic offers
              expert guidance and comprehensive support in developing syllabi
              that align with educational objectives and promote effective
              learning experiences.
            </p>
          </div>
          <v-divider color="success" :thickness="2" class="my-5" />
          <div class="mt-3" @click="toggleDetail(2)">
            <p class="d-flex align-center justify-space-between">
              CV clinic
              <v-icon @click="toggleDetail(2)" v-if="!xs">
                {{ select === 2 ? "mdi-minus" : "mdi-plus" }}
              </v-icon>
            </p>
            <p v-if="select === 2" class="sub-heading mt-2">
              Discover the transformative power of our CV Clinic, where we offer
              comprehensive support and expertise to elevate your curriculum
              vitae (CV) or resume to new heights.
            </p>
          </div>
          <v-divider color="success" :thickness="2" class="my-5" />
          <div class="mt-3" @click="toggleDetail(3)">
            <p class="d-flex align-center justify-space-between">
              A.I Interview
              <v-icon @click="toggleDetail(3)" v-if="!xs">
                {{ select === 3 ? "mdi-minus" : "mdi-plus" }}
              </v-icon>
            </p>
            <p v-if="select === 3" class="sub-heading mt-2">
              Our platform harnesses the power of artificial intelligence to
              deliver a seamless and intuitive experience for remote interviews.
              This innovative solution is revolutionizing the interview process,
              enhancing efficiency, accessibility, and effectiveness. By
              leveraging AI technology, we are transforming the way interviews
              are conducted, ensuring a streamlined experience that saves time
              and resources.
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="5">
        <div ref="image" class="image">
          <img
            :height="windowWidth > 1700 ? '650' : '550'"
            src="@/assets/images/Frame 4.png"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { useDisplay } from "vuetify";
import { TextPlugin } from "gsap/TextPlugin";
import { ref, Ref, onMounted, computed } from "vue";
gsap.registerPlugin(TextPlugin);
const { xs } = useDisplay();

// Data Variable
let select: Ref<number | null> = ref(1);
const title1 = ref(null);
const title2 = ref(null);
const service = ref(null);
const service1 = ref(null);
const image = ref(null);

//  Component Mounted
onMounted(() => {
  gsap.to(title1.value, {
    duration: 0.6,
    text: "Areas of Our Experties",
    ease: "slow(0.7,0.7,false)",
    x: 0,
  });
  gsap.to(title2.value, {
    duration: 1,
    text: "Stay ahead of the game with HCMS - the ultimate tool for tracking talent performance in government, private, and educational settings.",
    ease: "none",
    delay: 1,
  });
  gsap.to(service.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
  });
  gsap.to(service1.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
  gsap.to(image.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
  });
});

// Computed
const windowWidth = computed(() => {
  return window.innerWidth;
});

// Methods
const toggleDetail = (index: number) => {
  select.value = select.value === index ? null : index;
};
</script>

<style lang="scss" scoped>
#our-services {
  .main-heading {
    font-size: 43px;
    font-weight: 600;
  }

  .sub-heading {
    font-size: 14px;
    font-weight: 300;
    color: #54618b;
  }

  .base-card {
    padding: 1.75rem 1.5rem !important;
    background: #0a0b21 !important;
    box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
    border-radius: 20px !important;
  }

  .cursor {
    cursor: pointer;
  }

  .service {
    transform: translateX(700px) translateY(-200px);
    opacity: 0;
    display: none;
  }

  .service1 {
    transform: translateX(-200px);
    opacity: 0;
    display: none;
  }

  .image {
    transform: translateX(700px) translateY(800px);
    opacity: 0;
    display: none;

    @media (min-width: 1290px) {
      float: right;
    }

    @media (min-width: 1700px) {
      margin-right: 5rem;
    }
  }

  .center-class {
    @media (min-width: 1700px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
