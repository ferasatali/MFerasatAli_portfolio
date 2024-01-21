<template>
  <section>
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex align-center justify-center flex-column mt-8">
        <p class="main-heading" ref="title1"></p>
        <p class="paragraph" ref="title2"></p>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center flex-wrap" style="gap: 2rem"
        v-for="(item, index) in FerasatProjects" :key="index">
        <div class="d-flex base-card flex-column" :class="`${item.animation}`" :ref="animationPersonalProject[index]">
          <p class="header-simple">{{ item.title }} <span v-show="item.subtitle">
              ( {{ item.subtitle }} )
            </span>
          </p>
          <p class="sub-heading mt-3">
            <span class="sub-heading1 ml-2 d-flex justify-end">
              ( {{ item.date }} )
            </span>
          </p>
          <div class="px-3">
            <ul v-for="(detail, index) in item.content" :key="index">
              <li>
                {{ detail }}
              </li>
            </ul>
          </div>
          <div class="d-flex  mt-3 flex-column">
            <p :class="`text-${link.color}`" v-for="(link, ind) in item.links" :key="ind">
              Link: &nbsp; <a :href="link.url" target="_blank"> {{ link.name }}</a>
            </p>
          </div>
          <div class="d-flex align-center justify-end ">
            <v-btn variant="text" class="text-capitalize" @click="onClick"> Project images (work on progress) <v-icon> {{
              picture ?
              'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon> </v-btn>
          </div>
          <div class="d-flex align-center justify-center base-card mt-3" style="width:100%" v-if="picture">
            <v-carousel show-arrows="hover" height="400">
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
              <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
          </div>
          <v-divider thickness="2" color="blue" class="mt-3" />
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FerasatProjects } from "@/utils/ferasatProjects"
gsap.registerPlugin(TextPlugin);


const title1 = ref(null);
const title2 = ref(null);
const picture = ref(false);

const animationPersonalProject = Array.from({ length: FerasatProjects.length }, (_, i) => ref(null));

onMounted(() => {
  gsap.to(title1.value, {
    duration: 0.6,
    text: "Projects by M Ferasat Ali",
    ease: "slow(0.7,0.7,false)",
    x: 0,
  });
  gsap.to(title2.value, {
    duration: 1,
    text: "Exploring diverse realms, my personal projects showcase creativity, innovation, and technical proficiency.",
    ease: "none",
    delay: 1,
  });

  animationPersonalProject.forEach((anim, index) => {
    gsap.to(anim.value, {
      duration: 1,
      opacity: 1,
      display: "block",
      x: 1,
      y: 1,
      delay: 0.3 + index * 0.1,
    });
  });
});

const onClick = () => {
  picture.value = !picture.value;
};

</script>
<style lang="scss" scoped>
.base-card {
  padding: 1.75rem 1.5rem !important;
  background: #0a0b21 !important;
  box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
  border-radius: 20px !important;
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
  &-1 {
    transform: translateX(-500px) translateY(-800px);
    opacity: 0;
    display: none;
  }

  &-2 {
    transform: translateX(500px) translateY(-800px);
    opacity: 0;
    display: none;
  }

  &-3 {
    transform: translateX(-600px) translateY(100px);
    opacity: 0;
    display: none;
  }

  &-4 {
    transform: translateX(-800px) translateY(120px);
    opacity: 0;
    display: none;
  }
}
</style>
