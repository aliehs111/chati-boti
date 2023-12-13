import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/client';

// Function to get all users
export const getAllUsers = () => {
  return axios.get(`${API_BASE_URL}/api/user`); // Adjust the path as needed
};

// Function to get a user by ID
export const getUserById = (userId) => {
  return axios.get(`${API_BASE_URL}/api/user/${userId}`); // Adjust the path as needed
};

// Function to create a new user
export const createUser = (userData) => {
  return axios.post(`${API_BASE_URL}/api/user`, userData); // Adjust the path as needed
};

// Function to update a user by ID
export const updateUserById = (userId, updatedData) => {
  return axios.put(`${API_BASE_URL}/api/user/${userId}`, updatedData); // Adjust the path as needed
};

// Function to delete a user by ID
export const deleteUserById = (userId) => {
  return axios.delete(`${API_BASE_URL}/api/user/${userId}`); // Adjust the path as needed
};

// Define more user-related API request functions as needed
