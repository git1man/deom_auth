import axios from "axios";

const API = "https://dummyjson.com/auth";

export const login = (credi) => axios.post(`${API}/login`, credi);
export const getAuth = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  return axios.get(`${API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
