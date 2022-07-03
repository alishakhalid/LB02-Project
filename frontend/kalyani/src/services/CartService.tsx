import { RegistrationType } from "../types/RegistrationType";
import api from "./ApiService";

const CartService = {
  deleteClothingFromCartById: (id: string) => {
    return api.delete("/clothing/" + id);
  },

  getCartById: async (user: RegistrationType): Promise<RegistrationType> => {
    const { data } = await api.post("/customer/signup", user);
    return data;
  },

  findCartByCustomerId: (id: string) => {
    return api.get("/clothing/cart/" + id);
  },

  addClothingToCart: (item: any) => {
    return api.post("/clothing/cart", item);
  },
};

export default CartService;
