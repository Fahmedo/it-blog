<script setup>
import { ref } from 'vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill';

const content = ref('');
const previewMode = ref(false);

const editorOptions = {
  debug: 'info',
  modules: {
    toolbar: ['bold', 'italic', 'underline'],
  },
  placeholder: 'Compose an epic...',
  readOnly: true,
  theme: 'snow',
};

const togglePreviewMode = () => {
  previewMode.value = !previewMode.value;
};

const saveDraft = () => {
  // Simulate saving draft to a server or storage
  console.log('Draft saved:', content.value);
};
</script>
<template>
  <div class="container">
    Create post

    <div>
      <!-- <QuillEditor v-model="content" :options="editorOptions" />
     -->
      <QuillEditor toolbar="#my-toolbar">
        <template #toolbar>
          <div id="my-toolbar">
            <!-- Add buttons as you would before -->
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>

            <!-- But you can also add your own -->
            <button id="custom-button"></button>
          </div>
        </template>
      </QuillEditor>
    </div>
  </div>
</template>

<style scoped></style>
