import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/clothing",
});

export const getClothingById = (id: string) => {
  return API.get("/" + id);
};

export const getAllClothes = () => {
  return API.get("/");
};
