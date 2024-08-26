<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useBlogStore } from '@/stores/blog';
import { storeToRefs } from 'pinia';

const route = useRoute();
const useBlogs = useBlogStore();
const { getBlogPostsById } = useBlogs;
const { blog } = storeToRefs(useBlogs);

const getBlogPosts = async () => {
  await getBlogPostsById(route.params.id);
};

onMounted(() => getBlogPosts());
</script>

<template>
  <RouterView>
    <div class="container bg-white p-12">
      <div class="w-full rounded-md mb-10">
        <img :src="blog.blogImage" :alt="blog.BlogTitle" class="w-full" />
      </div>
      <div class="flex justify-between mb-10">
        <div>
          <div class="border-4 border-black w-14 h-14 rounded-full">
            <img
              :src="blog.author.profileImage"
              alt=""
              class="rounded-full w-12 h-12 object-center p-1"
            />
          </div>
        </div>
        <div>
          <p class="font-bold">{{ blog.author.authorName }}</p>
          <p>Date: {{ blog.createdate }}</p>
        </div>
      </div>
      <h1 class="title font-bold text-xl my-2">{{ blog.BlogTitle }}</h1>
      <div class="post-content content-normal">{{ blog.BlogText }}</div>
    </div>
  </RouterView>
</template>
<style scoped></style>
