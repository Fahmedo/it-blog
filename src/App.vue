<script setup>
import { onMounted } from 'vue';
import HeaderView from './views/header-footer/headerview.vue';
import SideBar from './views/utilities/SideBar.vue';
import Loader from './views/utilities/Loader.vue';
import { useUserStore } from './stores/user';

const { autoLogin, authUser } = useUserStore();
onMounted(() => {
  autoLogin();
});
</script>

<template>
  <div>
    <SideBar />
    <HeaderView />
    <Loader />

    <RouterView />
  </div>
</template>
<style scoped></style>
