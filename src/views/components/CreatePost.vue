<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useBlogStore } from '../../stores/blog';
import { createToaster } from '@meforma/vue-toaster';
import { storeToRefs } from 'pinia';
// import { FileInput, Textarea } from 'flowbite';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill';
// import { RouterLink } from 'vue-router';

const toaster = createToaster({
  position: 'bottom',
  duration: 3000,
});
const { createNewPost, createPost } = useBlogStore();
const previewMode = ref(false);

const updatePost = async () => {
  try {
    await createNewPost();
    toaster.success(`Post uploaded`);
  } catch (error) {
    toaster.error(error.message);
    throw error;
  }
};
console.log(createPost.content);
// const togglePreviewMode = () => {
//   previewMode.value = !previewMode.value;
// };

// const saveDraft = () => {
//   // Simulate saving draft to a server or storage
//   console.log('Draft saved:', content.value);
// };
</script>
<template>
  <div class="container py-10">
    <div class="bg-[#fff]">
      <div>
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput
        helperText="A profile picture is useful to confirm your are logged into your account"
        id="file"
      />

      <input
        v-model="createPost.title"
        type="text"
        placeholder="Add Tittle"
        class="w-[100%] h-20 placeholder:text-[30px] font-bold px-10"
      />

      <QuillEditor
        v-model:content="createPost.content"
        type="text"
        toolbar="full"
        placeholder="compose Epic"
      />
      <input
        v-bind="createPost.media"
        type="file"
        placeholder="Add Tittle"
        class="w-[100%] h-20 placeholder:text-[30px] font-bold px-10"
      />
    </div>

    <div class="flex justify-between w-[100%] my-4">
      <button class="button" @click="updatePost">Upload Post</button>
      <div class="space-x-3">
        <RouterLink to="/post/createPost/preview" class="button"
          >Preview</RouterLink
        >
        <button class="button" role="Save to draft">Save to Draft</button>
      </div>
    </div>
  </div>
</template>

<style>
.ql-editor {
  height: 50vh;
}
</style>
