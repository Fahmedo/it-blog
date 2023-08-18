import { defineStore } from 'pinia';
import axios from 'axios';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    _apiUrl: 'https://blog-api-g8u6.onrender.com/api/',
    blogs: [
      {
        title: '',
        content: '',
        media: [
          'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg',
        ],
      },
    ],
  }),
  actions: {
    setNewPost(newPost) {
      this.blogs = newPost;
    },
    async getBlogPosts() {
      try {
        await axios.get(`${this._apiUrl}blogs`, Response);
        console.log('successfully load posts');
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    },
    async createNewPost(post) {
      try {
        await axios.post(`${this._apiUrl}blogs`, Response);
        console.log('post uploaded', post);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    },
  },
  getters: {},
});
