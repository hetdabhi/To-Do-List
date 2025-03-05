import axios from "axios";

const API_URL = "http://localhost:5000/tasks"; // Ensure this matches your backend

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data || []; // Ensure response is an array
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return []; // Return empty array on error
  }
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (id, completed) => {
  const response = await axios.put(`${API_URL}/${id}`, { completed });
  return response.data;
};

export const editTask = async (id, newTitle) => {
  const response = await axios.put(`${API_URL}/${id}`, { title: newTitle });
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
