import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/tasks/todos');
export const addTask = (newPost) => API.post('/tasks/addtask', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/todos/${id}`, updatedPost);
export const deleteTask = (id) => API.delete(`/todos/${id}`);

export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/signup', formData);