import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Assuming your backend runs on port 3001


// Function to create a new post
export const createPost = (postData) => {
  return axios.post(`${API_BASE_URL}/posts`, postData);
};

// Function to fetch all posts
export const getAllPosts = () => {
  return axios.get(`${API_BASE_URL}/posts`);
};

// Function to fetch a specific post by ID
export const getPostById = (postId) => {
  return axios.get(`${API_BASE_URL}/posts/${postId}`);
};

// Function to update a post by ID
export const updatePost = (postId, updatedData) => {
  return axios.put(`${API_BASE_URL}/posts/${postId}`, updatedData);
};

// Function to delete a post by ID
export const deletePost = (postId) => {
  return axios.delete(`${API_BASE_URL}/posts/${postId}`);
};

// Define more post-related API request functions as needed

