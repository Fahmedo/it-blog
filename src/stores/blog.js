import { defineStore } from 'pinia';
import axios from 'axios';

const _URL = 'https://blog-api-g8u6.onrender.com/api/';
export const useBlogStore = defineStore('blog', {
  // //////////////////////////////////////
  /**
   *@state
   */
  state: () => ({
    loader: false,
    blogs: [
      {
        title:
          ' Why we need to plan ahead of projects. A write up givin details on what to know before starting a project idea',
        content:
          'Why we need to plan ahead of projects. A write up givin details on what to know before starting a project idea Why we need to plan ahead of projects. A write up givin details on what to know before starting a project idea Why we need to plan ahead of projects. A write up givin details on what to know before starting a project idea',
        media: [
          'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg',
        ],
      },
    ],
    createPost: [
      {
        id: '',
        title: '',
        content: '',
        media: [],
      },
    ],
  }),
  // //////////////////////////////////////
  /**
   *@actions
   */
  actions: {
    setNewPost(newPost) {
      this.blogs = newPost;
    },
    // //////////////////////////////////////

    async getBlogPosts() {
      try {
        this.loader = true;
        await axios.get(`${_URL}blogs`, Response);
        this.loader = false;
        console.log('successfully load posts');
      } catch (error) {
        this.loader = false;
        console.log(error.message);
        throw error;
      }
    },

    // //////////////////////////////////////

    async createNewPost(payload) {
      try {
        const id = Math.floor(Math.random() * 10000);
        const title = '';
        const media = [];
        const content = '';
        this.createPost.id = id.toString();
        this.createPost.title = title;
        this.createPost.content = content;
        this.createPost.media = media;
        this.loader = true;
        await axios.post(`${_URL}blogs`, Response);
        this.loader = false;
        console.log('post uploaded');
      } catch (error) {
        this.loader = false;
        console.log(error.message);
        throw error;
      }
    },
  },
  // //////////////////////////////////////
  /**
   *@getters
   */
  getters: {},
});
