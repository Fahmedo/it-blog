<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import { useBlogStore } from '../stores/blog';
import { storeToRefs } from 'pinia';

const useBlog = useBlogStore();
const { blogs } = storeToRefs(useBlog);
const { getBlogPosts } = useBlog;
const getPosts = async () => await getBlogPosts();

onMounted(() => getPosts());
</script>

<template>
  <div class="container">
    <ul v-if="blogs">
      <li
        v-for="data in blogs"
        :key="data.id"
        class="my-[5px] lg:md:my-[10px] p-5 bg-white rounded-lg hover:bg-slate-100"
      >
        <RouterLink :to="'/postsDetails/' + data.id" class="content p-5 m-4">
          <div
            class="border-4 border-black w-14 h-14 rounded-full content-center"
          >
            <img
              :src="data.author.profileImage"
              alt=""
              class="rounded-full w-12 h-12 object-center p-1"
            />
          </div>
          <div class="flex text-xs space-x-10">
            <div class="font-bold">{{ data.author.authorName }}</div>
            <div>{{ data.createdate }}</div>
          </div>
          <h3 class="text-[#5264ae] font-bold text-left" id="title">
            {{ data.BlogTitle }}
          </h3>
        </RouterLink>
        <div>{{ data.BlogText.slice(0, 145).padEnd(150, '...') }}</div>
        <div class="flex justify-between" id="comment_container">
          <span class="likes"> likes</span>
          <span class="comment"> comments</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
