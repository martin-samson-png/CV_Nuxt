<template>
  <div class="form-container">
    <div class="title"><p>Entrer vos informations</p></div>
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label for="firstName">Prénom</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Entrer votre prénom"
          v-model="firstname"
        />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Entrer votre adresse email"
          v-model="email"
        />
      </div>
      <div class="input-group">
        <label for="phone">Téléphone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Entrer votre numéro de téléphone"
          v-model="phone"
        />
      </div>
      <div class="input-group">
        <label for="found-select">Comment m’avez-vous trouvé&nbsp;?</label>
        <select id="found-select" name="found-select" v-model="found">
          <option value="" disabled>— Sélectionnez une option —</option>
          <option value="ref">Recommandation</option>
          <option value="GitHub">GitHub</option>
          <option value="Google">Google</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Other">Autre</option>
        </select>
      </div>
      <div class="input-group">
        <label for="message">Message</label>
        <textarea
          name=""
          id=""
          placeholder="Votre message ici..."
          rows="3"
          v-model="message"
        ></textarea>
      </div>
      <input
        v-model="website"
        class="hidden"
        tabindex="-1"
        autocomplete="off"
      />
      <p class="success" v-if="state === 'ok'">Merci ! Message envoyé</p>
      <p class="error" v-if="state === 'error'">{{ errMsg }}</p>
      <button
        :disabled="state === 'sending'"
        type="submit"
        class="btn-primary sign"
      >
        Envoyer
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const firstname = ref("");
const email = ref("");
const phone = ref("");
const found = ref("");
const message = ref("");
const website = ref("");
const errMsg = ref("");
const state = ref<"idle" | "sending" | "ok" | "error">("idle");

const regEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i;
const regPhone = /^[+()\d\s.-]{6,20}$/;

const cleanData = (s = "") => s.trim().replace(/\s+/g, " ");

const submitForm = async () => {
  state.value = "sending";
  errMsg.value = "";
  firstname.value = cleanData(firstname.value);
  email.value = cleanData(email.value);
  phone.value = cleanData(phone.value);
  message.value = cleanData(message.value);

  if (!firstname.value || !email.value || !message.value || !found.value) {
    errMsg.value = "Tous les champs sont requient";
    state.value = "error";
    return;
  }

  if (!regEmail.test(email.value)) {
    errMsg.value = "Format d'email invalide";
    state.value = "error";
    return;
  }

  if (phone.value && !regPhone.test(phone.value)) {
    errMsg.value = "Format de numéro de téléphone invalide";
    state.value = "error";
    return;
  }
  try {
    await $fetch("/api/form", {
      method: "POST",
      body: {
        firstname: firstname.value,
        email: email.value,
        phone: phone.value,
        found: found.value,
        message: message.value,
        website: website.value,
      },
    });
    state.value = "ok";
    firstname.value =
      email.value =
      phone.value =
      message.value =
      found.value =
        "";
  } catch (err: any) {
    state.value = "error";
    errMsg.value = err.data.message;
  }
};
</script>

<style scoped>
.form-container {
  width: 17rem;
  border-radius: 15px;
  background-color: #0e1a2a;
  padding: 2rem 2rem 1.5rem;
  color: rgba(243, 244, 246, 1);
  box-shadow: 0 0 20px var(--btn-primary);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
}

.title p {
  margin: 0;
}

.input-group {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  margin: 0.7rem 0 0.3rem;
  padding-left: 0.4rem;
  display: block;
  margin-bottom: 4px;
}

.input-group input,
.input-group select,
.input-group textarea {
  width: 15rem;
  border-radius: 0.375rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #213147;
  outline: 0;
  background-color: #0c1626;
  padding: 0.5rem 1rem;
  color: rgba(243, 244, 246, 1);
}

.input-group select {
  width: 100%;
  text-align: center;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  border-color: #a78bfa;
}

.input-group input::placeholder,
option,
.input-group textarea::placeholder {
  color: #78839a;
}

.sign {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 1rem;
  padding: 0.75rem;
  text-align: center;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
}
.error {
  margin-top: 0.4rem;
  font-size: 18px;
  width: 100%;
  text-align: center;
  color: #f87171;
}
.success {
  margin-top: 0;
  font-size: 18px;
  width: 100%;
  text-align: center;
  color: #22c55e;
}
input:-webkit-autofill {
  -webkit-text-fill-color: #e6e9f5;
  transition: background-color 9999s ease-out;
}
.hidden {
  display: none !important;
}
</style>
