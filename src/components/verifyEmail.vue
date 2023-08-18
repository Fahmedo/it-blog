<template>
  <div>
    <p v-if="!userStore.newUser.isEmailVerified">
      Your email is not verified. Please check your email for a verification
      link.
      <button @click="verifyEmail(token)">Verify Email</button>
    </p>
    <p v-else>Your email has been verified. You can now access your account.</p>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'; // Adjust the path to your store
import { ref } from 'vue';

const userStore = useUserStore();
const token = ref(''); // Assign the verification token from the URL here

const verifyEmail = () => {
  userStore.verifyEmail(token.value);
};
</script>
