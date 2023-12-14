import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Assuming your backend runs on port 3001


// Function to add a friend to a user's friend list
export const addFriend = (userId, friendId) => {
  return axios.post(`${API_BASE_URL}/friends/add`, { userId, friendId });
};

// Function to remove a friend from a user's friend list
export const removeFriend = (userId, friendId) => {
  return axios.delete(`${API_BASE_URL}/friends/remove/${userId}/${friendId}`);
};

// Define more friend-related API request functions as needed

