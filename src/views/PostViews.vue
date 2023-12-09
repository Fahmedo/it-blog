<script setup>
import { RouterLink } from 'vue-router';
import { onUpdated, ref } from 'vue';
import { useBlogStore } from '../stores/blog';

const blogs = useBlogStore();
const blogsData = ref(blogs.blogs);
const getPosts = () => blogs.getBlogPosts();

onUpdated(() => getPosts());
</script>

<template>
  <div class="">
    <ul>
      <li
        v-for="(data, postId) in blogsData"
        :key="postId"
        class="my-[5px] lg:md:my-[10px] p-5 bg-white"
      >
        <RouterLink :to="'/postsDetails/' + postId" class="content p-5 m-4">
          <div class="p-1 border-4 border-black w-14 rounded-full">
            <img :src="data.media" alt="" class="rounded-full" />
          </div>
          <div class="flex text-xs space-x-10">
            <div class="font-bold">Author name</div>
            <div>date/time posted</div>
          </div>
          <h3 class="text-red-500 text-sm text-left" id="title">
            {{ data.title }}
          </h3>
        </RouterLink>
        <div class="flex justify-between" id="comment_container">
          <span class="likes"> likes</span>
          <span class="comment"> comments</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
