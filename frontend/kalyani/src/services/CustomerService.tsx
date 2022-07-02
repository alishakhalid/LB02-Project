import { RegistrationType } from "../types/RegistrationType";
import api from "./ApiService";

const CustomerService = {
  createCustomer: async (user: RegistrationType): Promise<RegistrationType> => {
    const { data } = await api.post("/customer/signup", user);
    return data;
  },
};

export default CustomerService;
