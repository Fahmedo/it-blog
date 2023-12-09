<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user';
import { storeToRefs } from 'pinia';

const userData = useUserStore();
const { authUser, mobileView } = storeToRefs(userData);
const handleLogout = userData.logout;
const router = useRouter();

const logout = function () {
  handleLogout();
  router.replace('/');
};
// const user = localStorage.getItem('user');
</script>

<template>
  <div
    class="w-[200px] h-[100%] p-5 fixed top-[10%] hidden lg:md:flex bg-white"
    :style="{ display: mobileView ? 'flex' : '' }"
    id="content"
  >
    <nav class="navigation">
      <ul class="text-red">
        <li class="list active">
          <b></b>
          <b></b>
          <RouterLink class="" to="/">
            <span class="icons">
              <ion-icon name="home-outline"></ion-icon>
              <span class="title"> Home </span>
            </span>
          </RouterLink>
        </li>

        <li class="list" v-if="authUser">
          <b></b>
          <b></b>
          <RouterLink to="/notification">
            <span class="icons">
              <ion-icon name="notifications-outline"></ion-icon>
              <span class="title"> Notification </span>
            </span>
          </RouterLink>
        </li>

        <li class="list" v-if="authUser">
          <b></b>
          <b></b>
          <RouterLink to="/post/createPost">
            <span class="icons">
              <ion-icon name="create-outline"></ion-icon>
              <span class="title"> Create Post </span>
            </span>
          </RouterLink>
        </li>

        <li class="list">
          <b></b>
          <b></b>
          <RouterLink to="/settings">
            <span class="icons">
              <ion-icon name="settings-outline"></ion-icon>
              <span class="title"> Settings </span>
            </span>
          </RouterLink>
        </li>

        <li class="list" v-if="authUser">
          <b></b>
          <b></b>
          <a href="#" @click="logout">
            <span class="icons">
              <ion-icon name="log-out-outline"></ion-icon>
              <span class="title"> logout</span>
            </span>
          </a>
        </li>

        <li class="list" v-if="!authUser">
          <b></b>
          <b></b>
          <RouterLink to="/login">
            <span class="icons">
              <ion-icon name="log-in-outline"></ion-icon>
              <span class="title"> Login</span>
            </span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
li {
  margin: 10px 0;
  margin-top: 2rem;
}

li:hover span {
  padding: 5px;
  background: black;
  color: white;
  border-radius: 20px;
}
</style>
