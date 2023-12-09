// userStore.js

import { defineStore } from 'pinia';
import axios from 'axios';
import { createToaster } from '@meforma/vue-toaster';

const toaster = createToaster({
  position: 'bottom',
  duration: 5000,
});

const _URL = 'https://blog-api-g8u6.onrender.com/api/auth/';
export const useUserStore = defineStore('user', {
  // //////////////////////////////////////
  /**
   *@state
   */
  state: () => ({
    user: {
      username: '',
      password: '',
    },
    newUser: {
      username: '',
      email: '',
      password: '',
    },
    isEmailVerified: false,
    currentUser: '',
    loader: false,
    authUser: false,
    mobileView: false,
  }),

  // //////////////////////////////////////
  /**
   *@actions
   */
  actions: {
    setUser(newUser) {
      this.user = newUser;
    },
    async registerUser(payload) {
      try {
        this.loader = true;
        await axios.post(`${_URL}register`, payload);
        console.log('User registered successfully');
        this.loader = false;
      } catch (error) {
        this.loader = false;
        toaster.error(error.response.data.message);
        throw error.message;
      }
    },

    // //////////////////////////////////
    async loginUser(payload) {
      try {
        this.loader = true;
        const res = await axios.post(`${_URL}login`, payload);
        this.user.username = payload.username;
        this.user.password = payload.password;
        this.loader = false;
        this.authUser = true;
        this.currentUser = payload.username;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(res);
      } catch (error) {
        this.loader = false;
        toaster.error(error.response.data.message);
        throw error.message;
      }
    },
    // ///////////////////////////////////
    logout() {
      this.currentUser = '';
      this.user.password = null;
      this.user.username = null;
      this.authUser = false;
      localStorage.removeItem('user');
    },
    // ///////////////////////////////////
    async resetPassword(email) {
      try {
        this.loader = true;
        await axios.post(`${_URL}send-reset-password-email`, {
          email,
        });
        this.loader = false;
        toaster.success(`Password reset successfully`);
      } catch (error) {
        this.loader = false;
        toaster.error(error.response.data.message);
        throw error.message;
      }
    },

    // ///////////////////////////////////
    async verifyEmail(token) {
      try {
        this.loader = true;
        const response = await axios.put(`${_URL}verify-account`, {
          token,
        });
        this.loader = false;
        this.isEmailVerified = true;
        toaster.success('Account verified');
        router.push('/');
      } catch (error) {
        this.loader = false;
        toaster.error(error.response.data.message);
        throw error.message;
      }
    },
    async autoLogin() {
      let authToken = localStorage.getItem('user');
      if (authToken) {
        try {
          this.loader = true;
          const res = await axios.post(`${_URL}login`, JSON.parse(authToken));
          this.user.username = authToken.username;
          this.user.password = authToken.password;
          this.loader = false;
          this.authUser = true;
          this.currentUser = authToken.username;
          console.log(res);
        } catch (error) {
          this.loader = false;
          throw error.message;
        }
      }
    },
  },

  // //////////////////////////////////////
  /**
   *@getters
   */
  getters: {},
});
