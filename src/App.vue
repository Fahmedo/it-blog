<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useUserStore } from './stores/user';

const store = useUserStore();

const handleRegisterUser = async function () {
  try {
    await store.register();
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <form action="">
    <label for="username">
      Username:
      <input type="text" name="" v-model="store.user.username" />
    </label>
    <label for="password">
      Password:
      <input type="text" name="" v-model="store.user.password" />
    </label>
    <label for="password">
      Email:
      <input type="email" name="" v-model="store.user.email" />
    </label>
    <div type="submit" @click="handleRegisterUser">rigister</div>
  </form>
</template>
