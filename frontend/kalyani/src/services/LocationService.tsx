import axios from "axios";
import { RegistrationType } from "../types/RegistrationType";

const API = axios.create({
  baseURL: "http://localhost:8080/customer",
});

export const getCustomerById = (id: string) => {
  return API.get("/" + id);
};

//post
export const addCustomer = (data: RegistrationType) => {
  return API.post("/", data);
};
