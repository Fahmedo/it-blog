import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('users', () => {
  const apiUrl = 'http://localhost:3000/api';
  const user = ref({
    username: '',
    password: '',
    email: '',
  });

  const register = async function (contex, user) {
    try {
      const res = await axios.post(`${apiUrl}/auth/register`, {
        user,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { user, register };
});
