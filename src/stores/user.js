// userStore.js

import { defineStore } from 'pinia';
import axios from 'axios';
import { createToaster } from '@meforma/vue-toaster';
import { environment } from './environment';

const toaster = createToaster({
  position: 'top',
  duration: 5000,
});

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
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    isEmailVerified: false,
    currentUser: '',
    loader: false,
    authtoken: localStorage.getItem('userToken') || null,
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
        await axios.post(`${environment.BASE_URL}register`, payload);
        this.loader = false;
        toaster.success('User registered successfully');
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
        const res = await axios.post(`${environment.BASE_URL}login`, payload);
        this.user.username = payload.username;
        this.user.password = payload.password;
        this.loader = false;
        toaster.success('User Login successfully');
        this.currentUser = res.data.firstName;
        localStorage.setItem(
          'userToken',
          JSON.stringify(res.data.access_token)
        );
        console.log(res, payload);
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
      localStorage.removeItem('userToken');
    },
    // ///////////////////////////////////
    async resetPassword(email) {
      try {
        this.loader = true;
        await axios.post(`${environment.BASE_URL}reset-password`, {
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
        const response = await axios.put(
          `${environment.BASE_URL}verify-account`,
          {
            token,
          }
        );
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
          const res = await axios.post(
            `${environment.BASE_URL}login`,
            JSON.parse(authToken)
          );
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
  getters: {
    authUser: (state) => !!state.authtoken,
  },
});
