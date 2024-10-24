// src/services/apiService.js
import axios from "axios";

const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

const fetchUserProfile = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${apiKey}`, // Use the API key if needed
        },
      }
    );
    return response.data; // Return the user profile data
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error; // Rethrow the error for further handling
  }
};

export { fetchUserProfile };
