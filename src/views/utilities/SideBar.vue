<script>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="w-[150px] h-[500px] pl-2 fixed top-[10%]" id="content">
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

        <li class="list">
          <b></b>
          <b></b>
          <a href="#">
            <span class="icons">
              <ion-icon name="person-circle-outline"></ion-icon>
              <span class="title">Profile</span>
            </span>
          </a>
        </li>

        <li class="list">
          <b></b>
          <b></b>
          <a href="#">
            <span class="icons">
              <ion-icon name="notifications-outline"></ion-icon>
              <span class="title"> Notification </span>
            </span>
          </a>
        </li>

        <li class="list">
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
          <a href="#">
            <span class="icons">
              <ion-icon name="settings-outline"></ion-icon>
              <span class="title"> Settings </span>
            </span>
          </a>
        </li>

        <li class="list">
          <b></b>
          <b></b>
          <RouterLink to="/login/signup">
            <span class="icons">
              <ion-icon name="log-out-outline"></ion-icon>
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
  transform: rotateY(90deg);
  border-radius: 20px;
}
</style>
