<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useBlogStore } from '@/stores/blog';
import { storeToRefs } from 'pinia';

const route = useRoute();
const useBlogs = useBlogStore();
const { blogs, getBlogPostsById } = storeToRefs(useBlogs);

onMounted(() => getBlogPostsById(route.params.id));
</script>

<template>
  <RouterView>
    <div class="container">
      <div>post details</div>
      <div class="content" v-for="data in blogs">
        <div class="post-">{{ data.BlogTitle }}</div>
        <h1 class="title">{{ data.blogImage }}</h1>
        <div class="post-content">{{ data.BlogText }}</div>
      </div>
    </div>
  </RouterView>
</template>
<style scoped></style>
