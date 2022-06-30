import api from "./ApiService";

const LocationService = {
  getCities: () => {
    return api.get("/customer/location");
  },
};

export default LocationService;
