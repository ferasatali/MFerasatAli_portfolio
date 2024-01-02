<template>
  <section>
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-column mt-8"
      >
        <p class="main-heading" ref="title1"></p>
        <p class="paragraph" ref="title2"></p>
      </v-col>
      <v-col
        cols="12"
        class="d-flex align-center justify-center flex-wrap mt-6"
        style="gap: 2rem"
      >
        <div
          class="base-card d-flex align-center flex-column animation-div"
          ref="experties1"
        >
          <img src="@/assets/images/museum.png" class="mt-4" />
          <p class="mt-4">Government & Private Entities</p>
          <p class="paragraph">
            Revolutionize the way you manage your human capital with our
            comprehensive HCMS solutions. Our software and technology solutions
            are designed to meet the unique needs of both public and private
            sector organizations. From recruitment and onboarding to time and
            attendance tracking, our solutions help streamline HR processes and
            support better decision making through data analysis.
          </p>
          <v-btn variant="text" elevation="0" class="mt-3 learnmore">
            Learn More
          </v-btn>
        </div>
        <div
          class="base-card d-flex align-center flex-column animation-div"
          ref="experties2"
        >
          <img src="@/assets/images/school.png" class="mt-4" />
          <p class="mt-4">Educational Institute</p>
          <p class="paragraph">
            At the forefront of technological advancement, we bring the power of
            AI to the education sector. Our goal is to enhance the quality of
            education and student development by leveraging the latest AI
            technologies. By conducting in-depth analysis of student skills, we
            tailor teaching methods to address areas of improvement and create a
            dynamic, adaptive learning environment.
          </p>
          <v-btn variant="text" elevation="0" class="mt-3 learnmore">
            Learn More
          </v-btn>
        </div>
        <div
          class="base-card d-flex align-center flex-column animation-last"
          ref="experties3"
        >
          <img src="@/assets/images/searching.png" class="mt-4" />
          <p class="mt-4">Talents</p>
          <p class="paragraph">
            Winning the race for top talent is essential in today’s crowded job
            market. With competition for funding being fierce, acquiring top
            talent should also be a top priority for founding teams worldwide. A
            well-thought-out and data-driven approach to talent acquisition is
            the key to unlocking your company’s potential for success, Outpace
            the competition in the race for top talent and cut the time by 60%.
          </p>
          <v-btn variant="text" elevation="0" class="mt-3 learnmore">
            Learn More
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const title1 = ref(null);
const title2 = ref(null);
const experties1 = ref(null);
const experties2 = ref(null);
const experties3 = ref(null);

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
  gsap.to(experties1.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
  gsap.to(experties3.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
    delay: 0.4,
  });
  gsap.to(experties2.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
});
</script>
<style lang="scss" scoped>
.base-card {
  width: 310px;
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;

  @media (max-width: 400px) {
    width: 265px;
  }
}

.main-heading {
  font-size: 43px;
  font-weight: 600;
  transform: translateX(-400px);
}

.paragraph {
  font-size: 14px;
  font-weight: 300;
  color: #54618b;
  display: flex;
  margin-top: 9px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
