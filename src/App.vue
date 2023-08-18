<script setup>
import HeaderView from './views/header-footer/HeaderView.vue';
import FooterView from './views/header-footer/FooterView.vue';
import SideBar from './views/utilities/sidebar.vue';
// import Comments from './views/utilities/comments.vue';
// import CreatePost from './components/CreatePost.vue';
</script>

<template>
  <div>
    <HeaderView />
    <SideBar />
    <!-- <CreatePost /> -->
    <RouterView />
    <!-- <Comments /> -->
    <FooterView />
  </div>
</template>
<style scoped></style>
