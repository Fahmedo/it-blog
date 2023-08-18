<template>
  <div>
    <QuillEditor v-model="content" :options="editorOptions" />
    <button class="bg-skyblue" @click="togglePreviewMode">
      Toggle Preview
    </button>
    <button @click="saveDraft">Save Draft</button>
    <div v-if="previewMode" class="preview" v-html="content"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

<style>
.preview {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  color: black;
}
</style>
