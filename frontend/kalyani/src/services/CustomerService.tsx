import { RegistrationType } from "../types/RegistrationType";
import api from "./ApiService";

const CustomerService = {
  createCustomer: (data: RegistrationType) => {
    return api.post("/customer/create", data);
  },
};

export default CustomerService;
