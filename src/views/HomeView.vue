<script setup>
// import SideBar from './utilities/SideBar.vue';
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useBlogStore } from '../stores/blog';

const blogs = useBlogStore();
const blogsData = ref(blogs.blogs);
const getPosts = () => blogs.getBlogPosts();

onMounted(() => getPosts());
</script>

<template>
  <!-- <SideBar /> -->
  <div
    class="relative w-[50%] h-[500vh] my-0 mx-auto justify-center content-center text-justify"
    id="container"
  >
    <!-- to remove home indicator -->
    <h3>home</h3>
    <ul class="my-[50px] px-[10px] py-3 bg-white shadow-md">
      <li v-for="(data, index) in blogsData" :key="index" class="my-[10px]">
        <RouterLink to="/postsDetails" class="content p-5 m-4">
          <div class="p-1 border-4 border-black w-24 rounded-full">
            <img :src="data.media" alt="" class="rounded-full" />
          </div>
          <div class="flex text-xs font-bold space-x-3">
            <div>Author name</div>
            <div>date/time posted</div>
          </div>
          <RouterLink
            to="/postsDetails"
            class="text-red-500 text-sm text-left"
            id="title"
            >{{ data.title }}
            Why we need to plan ahead of projects. A write up givin details on
            what to know before starting a project idea
          </RouterLink>
        </RouterLink>
        <div class="flex justify-between" id="comment_container">
          <span class="likes"> likes icons</span>
          <span class="comment"> comments</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
