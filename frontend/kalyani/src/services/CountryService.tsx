import api from "./ApiService";

const CountryService = {
  getCountries: () => {
    return api.get("/customer/country");
  },
};

export default CountryService;
