<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useBlogStore } from '../stores/blog';

const blogs = useBlogStore();
const blogsData = ref(blogs.blogs);
const getPosts = () => blogs.getBlogPosts();
</script>

<template>
  <RouterView>
    <div class="container">
      <div>post details</div>
      <div class="content">
        <div class="post-">{{ blogsData.media }}</div>
        <h1 class="title">{{ blogsData.title }}</h1>
        <div class="post-content">{{ blogsData.content }}</div>
      </div>
    </div>
  </RouterView>
</template>
<style scoped></style>
