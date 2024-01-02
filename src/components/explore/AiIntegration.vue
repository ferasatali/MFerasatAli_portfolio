<template>
  <section id="ai-integration">
    <v-row align="center" class="center-class">
      <v-col class="d-flex align-center flex-row" cols="12" sm="6">
        <div class="d-flex align-center flex-column">
          <span @click="buttonUp">
            <img src="@/assets/icons/linear/frame.svg" />
          </span>
          <span @click="selectButton(1)">
            <div
              class="dot mt-6"
              :class="{ 'dot-btn': selectedButton === 1 }"
            ></div>
          </span>
          <span @click="selectButton(2)">
            <div
              class="dot mt-5"
              :class="{ 'dot-btn': selectedButton === 2 }"
            ></div>
          </span>
          <span @click="selectButton(3)">
            <div
              class="dot mt-5"
              :class="{ 'dot-btn': selectedButton === 3 }"
            ></div>
          </span>
          <span @click="buttonDown">
            <img
              src="@/assets/icons/linear/arrow-circle-down.svg"
              class="mt-6"
            />
          </span>
        </div>
        <div class="ml-10 integration" ref="integration1">
          <div v-if="selectedButton === 1">
            <p class="main-heading">
              Revolutionizing Skill Development in Education with
              <span class="text-blue"> AI Technology </span>
            </p>
            <p class="sub-heading mt-4">
              The integration of AI technology at the level of educational
              institutes can have a profound impact on the quality of education
              and the development of student’s skills. By leveraging the power
              of AI, institutes can conduct in-depth analyses of students’
              skills and tailor their syllabi to address any gaps or areas for
              improvement. This creates a dynamic and adaptable learning
              environment that equips students with the necessary skills to
              thrive in a rapidly changing world. Ultimately, AI technology in
              education can help institutions produce a well-rounded and highly
              skilled talent pool, poised for success in their future careers.
            </p>
          </div>
          <div v-else-if="selectedButton === 2">
            <p class="main-heading">
              Empowering the Power of HCMS for
              <span class="text-blue"> Talent Up-skilling </span>
            </p>
            <p class="sub-heading mt-4">
              By embracing the latest in HCMS technology, we aim to
              revolutionize the approach to HR and human capital development. We
              aim to deliver an efficient, cost-effective, and impactful
              experience for all stakeholders using the HCMS platform. Utilizing
              data-driven solutions, we streamline functions such as recruitment
              and significantly reduce time, effort, and monetary waste. Join us
              as we lead the charge towards a brighter future for talent
              up-skilling.
            </p>
          </div>
          <div v-else-if="selectedButton === 3">
            <p class="main-heading">
              Empowering Emiratization through
              <span class="text-blue"> AI-Assisted Skill Analysis </span>
            </p>
            <p class="sub-heading mt-4">
              The Emiratization initiative holds great potential for the future
              of the UAE, and with the utilization of data science and
              Artificial Intelligence, we can empower its success. By gaining a
              deeper understanding of the skills and competencies of Emirati
              talents, we can guarantee that they receive the best possible
              support as they join both the private and public sectors. Join us
              as we delve into how AI-assisted skill analysis can empower the
              Emiratization initiative through advanced HCMS.
            </p>
          </div>
        </div>
      </v-col>
      <v-col class="d-flex align-center justify-center" cols="12" sm="6">
        <div class="d-flex flex-column align-center">
          <div class="d-flex flex-row flex-wrap">
            <div
              class="base-card d-flex align-center mt-1 int2"
              ref="integration2"
            >
              <p class="main-size">Associate Software Engineer</p>
            </div>
            <div
              class="base-card ml-2 mt-1 d-flex flex-column align-center justify-center int2"
              ref="integration3"
            >
              <v-chip size="small">
                <span class="dot dot-blue"> </span>
                <span class="text-blue px-1">85% </span> Job Match
              </v-chip>
              <v-chip class="mt-2" size="small">
                <span class="dot dot-green mr-1"> </span> Online
              </v-chip>
            </div>
          </div>
          <div
            class="base-card d-flex align-center mt-3 int3"
            ref="integration4"
          >
            <img src="@/assets/icons/bold/ocean-protocol.svg" />
            <span class="px-4"
              >Our AI is analysing your cv, experience and skills...</span
            >
            <img src="@/assets/icons/bold/voice-square.svg" />
          </div>
          <div
            class="base-card base-card-chip mt-3 mx-6 int3"
            ref="integration5"
          >
            <span v-for="chip in skill_object" :key="chip" class="px-1">
              <v-chip size="small" :class="`mt-2 text-${getRandomColor()}`">
                {{ chip }}
              </v-chip>
            </span>
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

gsap.registerPlugin(TextPlugin);

const integration1 = ref(null);
const integration2 = ref(null);
const integration3 = ref(null);
const integration4 = ref(null);
const integration5 = ref(null);

const selectedButton = ref(1);

const skill_object = ref([
  "Perform risk analysis",
  "Manage Project Information",
  "Coach employees",
  "Use technical drawing software",
  "Use Cad Software",
  "Coach employees",
  "Create 3d environments",
  "Use CAD software",
  "Manage Project Information",
  "Use technical drawing software",
  "Use Cad Software",
  "Coach employees",
  "Create 3d environments",
  "Manage Project Information",
  "Use technical drawing software",
  "Coach employees",
  "Use technical drawing software",
]);

onMounted(() => {
  gsap.to(integration1.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
  });
  gsap.to(integration2.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
  });
  gsap.to(integration3.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
    delay: 0.2,
  });
  gsap.to(integration4.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    y: 1,
    delay: 0.2,
  });
  gsap.to(integration5.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    y: 1,
    delay: 0.2,
  });
});

const selectButton = (buttonNumber: number) => {
  selectedButton.value = buttonNumber;
};

const colors = ["blue", "green", "red", "pink", "danger", "warning", "teal"];

const buttonDown = () => {
  if (selectedButton.value > 0 && selectedButton.value < 3) {
    selectedButton.value++;
  }
};
const buttonUp = () => {
  if (selectedButton.value > 1 && selectedButton.value <= 3) {
    selectedButton.value--;
  }
};

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
</script>
<style lang="scss" scoped>
#ai-integration {
  .main-heading {
    font-size: 40px;
    font-weight: 600;
  }

  .main-size {
    font-size: 21px;
    font-weight: 700;
  }

  .sub-heading {
    font-size: 14px;
    font-weight: 300;
    color: #54618b;
    flex-direction: column;
    align-items: center;
  }

  .base-card {
    padding: 1.75rem 1.5rem !important;
    background: #0a0b21 !important;
    box-shadow: 0 6px 32px rgba(44, 50, 169, 0.04) !important;
    border-radius: 20px !important;

    &-chip {
      max-width: 515px;
    }
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: grey;
    border-radius: 50%; // This property makes the square div a circle

    &-btn {
      background-color: #0a0b21;
      border: 2px solid white;
      padding: 5px;
    }

    &-blue {
      background-color: blue;
    }

    &-green {
      background-color: green;
    }
  }

  .integration {
    transform: translateX(400px) translateY(-500px);
    opacity: 0;
    display: none;
  }

  .int2 {
    transform: translateX(400px) translateY(900px);
    opacity: 0;
    display: none;
  }

  .int3 {
    transform: translateY(300px);
    opacity: 0;
    display: none;
  }

  .center-class {
    margin-top: 1rem;

    @media (min-width: 1700px) {
      margin-left: auto;
      margin-right: auto;
      margin-top: 5rem;
    }
  }
}
</style>
