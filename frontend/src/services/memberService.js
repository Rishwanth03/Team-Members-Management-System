import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const createMember = async (formData) => {
  const response = await api.post("/members", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getMembers = async () => {
  const response = await api.get("/members");
  return response.data;
};

export const getMemberById = async (id) => {
  const response = await api.get(`/members/${id}`);
  return response.data;
};
