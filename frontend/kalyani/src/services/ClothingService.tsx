import api from "./ApiService";

const ClothingService = {
  getAllClothes: () => {
    return api.get("/clothing");
  },

  getClothingById: (id: string) => {
    return api.get("/clothing/" + id);
  },

  getAllClothingSize: () => {
    return api.get("/clothing/clothingSizes");
  },

  getClothingTypes: () => {
    return api.get("/clothing/clothingTypes");
  },
};

export default ClothingService;
