import api from "./ApiService";

const ClothingService = {
  getAllClothes: () => {
    return api.get("/clothing");
  },

  getClothingById: (clothingId: string) => {
    return api.get(`/clothing/${clothingId}`);
  },

  getAllClothingSize: () => {
    return api.get("/clothing/clothingSizes");
  },

  getClothingTypes: () => {
    return api.get("/clothing/clothingTypes");
  },
};

export default ClothingService;
