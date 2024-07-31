import { defineStore } from 'pinia';
import axios from 'axios';
import { environment } from './environment';

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
        id: '',
        BlogTitle: '',
        BlogText: '',
        createdate: '',
        likedBy: '',
        blogImage: '',
        author: {
          id: '',
          authorName: '',
          profileImage: '',
        },
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
        const res = await axios.get(`${environment.BASE_URL}blog/post`);
        this.loader = false;
        this.blogs = res.data;
      } catch (error) {
        this.loader = false;
        console.log(error.message);
        throw error;
      }
    },

    // //////////////////////////////////////
    async getBlogPostsById(id) {
      try {
        this.loader = true;
        const res = await axios.get(`${environment.BASE_URL}blog/post/${id}`);
        this.loader = false;
        this.blogs = res.data;
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
