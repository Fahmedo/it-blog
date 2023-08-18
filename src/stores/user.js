// userStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
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
    _apiUrl: 'https://blog-api-g8u6.onrender.com/api/auth/',
  }),

  // //////////////////////////////////////
  /**
   *
   */
  actions: {
    setUser(newUser) {
      this.user = newUser;
    },
    async registerUser(userData) {
      try {
        await axios.post(`${this._apiUrl}register`, userData);
        console.log('User registered successfully');
      } catch (error) {
        console.error(
          'Error registering user:',
          error.response ? error.response.data : error.message
        );
        throw error;
      }
    },

    // //////////////////////////////////
    async loginUser(userData) {
      try {
        await axios.post(`${this._apiUrl}login`, userData);
        // Update isAuthenticated state based on successful login
        this.isAuthenticated = true;
        console.log('User logged in', userData);
        // this.$toast.success(' succesfully', {
        //   position: 'bottom',
        //   duration: 2000,
        // });
      } catch (error) {
        console.error(
          'Login error:',
          error.response ? error.response.data : error.message
        );
        throw error;
      }
    },

    // ///////////////////////////////////
    async resetPassword() {
      try {
        await axios.post(`${this._apiUrl}send-reset-password-email`);
        console.log('password reset');
      } catch (error) {
        console.log('Error resetting password');
        throw error;
      }
    },

    // ///////////////////////////////////
    async verifyEmail(token) {
      try {
        const response = await axios.put(`${this._apiUrl}verify-account`, {
          token,
        });
        this.isEmailVerified = true;
        console.log('Email verified', response.data);
      } catch (error) {
        console.log('Error verifying email');
        throw error;
      }
    },
  },
});
