<!-- Login.vue -->
<script setup>
import { useUserStore } from '../stores/user';
import { ref } from 'vue';
import { createToaster } from '@meforma/vue-toaster';

const toaster = createToaster({
  position: 'bottom',
  duration: 3000,
});

const regUser = ref(true);
const userStore = useUserStore();
const user = userStore.user;
const newUser = userStore.newUser;

const login = async () => {
  try {
    await userStore.loginUser(user);
    user.password = '';
    user.username = '';
    toaster.success(`logged-in successfully`);
  } catch (error) {
    // Handle error
    toaster.error(`error login`);
    throw error;
  }
};

const register = async () => {
  try {
    await userStore.registerUser(newUser);
    newUser.email = '';
    newUser.password = '';
    newUser.username = '';
  } catch (error) {
    // Handle error
    throw error;
  }
};
</script>

<template>
  <div class="container" id="container">
    <div class="card" v-if="regUser">
      <input v-model="user.username" placeholder="Username" />

      <input v-model="user.password" type="password" placeholder="Password" />

      <button class="button" @click="login">Login</button>
    </div>
    <!-- Else -->
    <div class="card" v-else>
      <input v-model="newUser.username" placeholder="Username" />

      <input v-model="newUser.email" placeholder="email@example.com" />

      <input
        v-model="newUser.password"
        type="password"
        placeholder="Password"
      />

      <input
        v-model="newUser.password"
        type="password"
        placeholder="confirm Password"
      />

      <button class="button" @click="register">signup</button>
    </div>
    <div @click="regUser = !regUser" class="flex float-left left-10 mt-4">
      <div v-if="regUser">
        Im a new user
        <span
          class="text-white bg-red-500 rounded-sm p-1 cursor-pointer hover:border-black border-2"
          >signup</span
        >
      </div>
      <div v-else>
        Already a user
        <span
          class="text-white bg-red-500 rounded-sm p-1 cursor-pointer hover:border-black border-2"
          >signup</span
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
input {
  margin: 10px 0px;
  width: 100%;
  border: 1px solid black;
  padding: 0 5px;
}
input::placeholder {
  color: #2727278f;
  font-size: small;
  font-style: italic;
}
</style>
