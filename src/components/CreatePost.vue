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
      <QuillEditor v-model="content" :options="editorOptions" />
    </div>
  </div>
</template>

<style scoped></style>
