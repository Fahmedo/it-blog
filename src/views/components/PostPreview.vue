<script setup>
import { useBlogStore } from '../../stores/blog';
import { storeToRefs } from 'pinia';

const blogData = useBlogStore();
const blog = storeToRefs(blogData.blogs);
</script>
<template>
  <div>
    <div>post preview</div>
    <div class="title">{{ blog.title }}</div>
    <div class="content">{{ blog.title }}</div>
  </div>
</template>

<style scoped></style>
