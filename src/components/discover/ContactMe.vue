<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" class=" px-2 px-md-5">
        <div ref="contact" class="contact">
          <p class="main-heading">Contact Me</p>
        </div>
        <div ref="contact1" class="contact1">
          <p class="sub-heading px-2">
            We would love to speak with you. Feel free to reach out using
            the below details.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" class=" px-2 px-md-5 mt-4">
      <v-col cols="12" sm="6" class="my-0 py-0">
        <div class="form-field">
          <v-text-field v-model="firstName" class="form-field-input" variant="solo" placeholder="First Name" />
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="my-0 py-0 ">
        <div class="form-field">
          <v-text-field v-model="lastName" class="form-field-input" variant="solo" placeholder="Last Name" />
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="my-0 py-0">
        <div class="form-field">
          <v-text-field v-model="email" class="form-field-input" variant="solo" placeholder="Email" />
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="my-0 py-0">
        <div class="form-field">
          <v-text-field v-model="phoneNumber" class="form-field-input" variant="solo" placeholder="phoneNumber"
            type="number" />
        </div>
      </v-col>
      <v-col cols="12" class="my-0 py-0">
        <div class="form-field">
          <v-textarea v-model="message" rows="6" class="form-field-input" variant="solo" placeholder="Message" />
        </div>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-end">
        <v-btn variant="text" class="contact-btn" @click="contactFerasat">
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { AppStore } from "@/store/app";
import gsap from "gsap";
import { loadSheetsApi } from "@/utils/googleSpreadSheetAPI";

const store = AppStore();
const contact = ref(null);
const contact1 = ref(null);

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const message = ref("");
const phoneNumber = ref("");

onMounted(() => {
  store.setNavBar("ContactUs");
  gsap.to(contact.value, {
    opacity: 1,
    display: "block",
    x: 1,
    y: 1,
    delay: 0.5
  });
  gsap.to(contact1.value, {
    duration: 1,
    opacity: 1,
    display: "block",
    x: 1,
  });
});

const contactFerasat = async () => {
  try {
    const value = {
      name: `${firstName.value} ${lastName.value}`,
      email: email.value,
      message: message.value,
      phone: phoneNumber.value,
    };

    try {
      const data = await loadSheetsApi(value);
      console.log("Data added to sheet:", data);
    } catch (error) {
      console.error('Error adding row:', error);
    }
  } catch (error) {
    console.error('Error initializing Sheets API:', error);
  }
};
</script>
<style scoped lang="scss">
.main-heading {
  font-size: 43px;
  color: rgba(28, 176, 244, 0.619) !important;
  font-weight: 600;
}

.sub-heading {
  font-size: 14px;
  font-weight: 300;
  color: #54618b;
}

.form-field {
  :deep(.form-field-label) {
    font-size: 14px;
    line-height: 16px;
    text-transform: capitalize;
    color: #3e457c;
    margin-bottom: 12px;
    display: block;
  }

  :deep(.form-field-input) {
    .v-input__control {
      .v-field.v-field--no-label.v-field--variant-solo.v-theme--dark.v-locale--is-ltr {
        border-radius: 13px !important;
        background: #090b35;
      }

      .v-text-field__slot {
        padding: 0 8px !important;
      }
    }

    .v-text-field__details {
      .v-messages__message {
        padding: 0 8px !important;
      }
    }
  }

  &-errors {
    margin: 0.4rem 0;

    &-error {
      color: rgb(132, 3, 3);
    }
  }
}

.contact {
  transform: translateX(700px) translateY(500px);
  opacity: 0;
  display: none;
}

.contact1 {
  transform: translateX(-200px);
  opacity: 0;
  display: none;
}

.contact-btn {
  border-radius: 16px;
  border: 2px solid #091235;
  font-size: 13px;
  color: #5fcfac !important;
}
</style>
