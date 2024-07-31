<script setup>
import Footer from './header-footer/FooterView.vue';
import PostViewsVue from './PostViews.vue';
</script>

<template>
  <div class="container" id="container">
    <div class="mb-[50px] px-[10px] py-3">
      <PostViewsVue />
    </div>

    <div class="justify-between flex">
      <div class="button cursor-pointer">next</div>
      <div class="button cursor-pointer">1</div>
      <div class="button cursor-pointer">preview</div>
    </div>
  </div>
  <Footer />
</template>
<style scoped></style>
