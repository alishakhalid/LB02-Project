import api from "axios";
import { useContext } from "react";
import { LoginType } from "../types/LoginType";
import Context from "../context/SnackbarContext";
import { useNavigate } from "react-router-dom";

const AuthService = () => ({
  // const { displaySnackbarMessage } = useContext(Context);
  // const navigate = useNavigate();
  // login: async ({ customerEmail, password }: LoginType) => {
  //  const {data} = await api.post("/customer/signin", {
  //     customerEmail,
  //     password,
  //   })
  //   .then((response) => {
  //     if (response.data) {
  //       localStorage.setItem("email", response.data.email);
  //       displaySnackbarMessage("Logged in successfully!", "success");
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 3000);
  //     }
  //     return response.data;
  //   })
  //   .catch((err) => {
  //     displaySnackbarMessage("Login failed", "error");
  //   });
  // },
});
export default AuthService;
