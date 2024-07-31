<script setup>
import { RouterLink } from 'vue-router';
('vue');
import { useUserStore } from '../../stores/user';
import { storeToRefs } from 'pinia';

const userData = useUserStore();
const { mobileView, authUser, user, currentUser } = storeToRefs(userData);
// TODO: Display user name at the header with icon
</script>

<template>
  <div
    class="fixed w-[100%] h-[80px] flex p-0 pt-4 lg:pt-[1rem] lg:pb-[3rem] lg:px-[3rem] justify-between z-10 bg-white mb-10 px-3"
  >
    <RouterLink to="/" class="logo">
      <img src="../../assets/Black-logo.svg" class="w-42 h-12" />
    </RouterLink>

    <div class="group inline-block" v-if="authUser">
      <span class="mr-10">{{ currentUser }}</span>
      <RouterLink to="/profile">
        <span class="icons">
          <ion-icon name="person-circle-outline"></ion-icon>
          <span class="title">Profile</span>
        </span>
      </RouterLink>
    </div>
    <div class="flex lg:md:hidden" @click="mobileView = !mobileView">
      <div class="bg-black p-2 w-12 h-10 relative space-y-1">
        <div class="h-1 w-8 bg-white"></div>
        <div class="h-1 w-8 bg-white"></div>
        <div class="h-1 w-8 bg-white"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
