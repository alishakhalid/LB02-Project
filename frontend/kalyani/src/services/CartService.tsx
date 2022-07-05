import { RegistrationType } from "../types/RegistrationType";
import api from "./ApiService";

const CartService = {
  deleteClothingFromCartById: (clothingId: string) => {
    return api.delete("/clothing/" + clothingId);
  },

  getCartById: async (user: any): Promise<RegistrationType> => {
    const { data } = await api.get("/clothing/cart", user);
    return data;
  },

  findCartByCustomerId: (id: string) => {
    return api.get("/clothing/cart/" + id);
  },

  addClothingToCart: (clothingId: any) => {
    return api.post(`/clothing/cart/${clothingId}`, clothingId);
  },

  getItemOfCart: () => {
    return api.get("/clothing/cart");
  },
};


export default CartService;
