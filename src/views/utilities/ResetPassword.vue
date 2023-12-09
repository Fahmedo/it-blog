<script setup>
import { useUserStore } from '../../stores/user';

const email = useUserStore.newUser.email;

const reset_password = async () => {
  try {
    await useUserStore.resetPassword(email.value);
  } catch (error) {
    throw error;
  }
};
</script>

<template>
  <div class="container">
    <div>
      Forgot your password kindly provide your email in the input field a link
      will be sent to reset your password thank you!
    </div>
    <div class="card">
      <label for="email">Email:</label>
      <input type="email" placeholder="email" v-model="email" />
      <button class="button" @click="reset_password">Reset Password</button>
    </div>
    <div>{{ email }}</div>
  </div>
</template>

<style scoped></style>
