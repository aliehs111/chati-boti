import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Adjust this URL as needed

// Function to get all users
export const getAllUsers = () => {
  return axios.get(`${API_BASE_URL}/users`);
};

// Function to get a user by ID
export const getUserById = (userId) => {
  return axios.get(`${API_BASE_URL}/users/${userId}`);
};

// Function to create a new user
export const createUser = (userData) => {
  return axios.post(`${API_BASE_URL}/users`, userData);
};

// Function to update a user by ID
export const updateUserById = (userId, updatedData) => {
  return axios.put(`${API_BASE_URL}/users/${userId}`, updatedData);
};

// Function to delete a user by ID
export const deleteUserById = (userId) => {
  return axios.delete(`${API_BASE_URL}/users/${userId}`);
};

// Define more user-related API request functions as needed
