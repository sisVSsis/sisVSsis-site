import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4002' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/chat');
export const createPost = (newPost) => API.post('/chat', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/chat/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/chat/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);