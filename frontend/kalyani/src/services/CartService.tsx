import api from "./ApiService";

const CartService = {
  deleteClothingFromCartById: (id: string) => {
    return api.delete("/clothing/" + id);
  },

  getClothingById: () => {
    return api.post("/clothing/cart");
  },

  createCartByCustomerId: (id: string) => {
    return api.post("/clothing/cart/" + id);
  },

  findCartByCustomerId: (id: string) => {
    return api.get("/clothing/cart/" + id);
  },
};

export default CartService;
