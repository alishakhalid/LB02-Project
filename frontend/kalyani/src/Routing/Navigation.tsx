import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../components/pages/AboutUs";
import Checkout from "../components/pages/CheckoutPage";
import Homepage from "../components/pages/Homepage";
import Login from "../components/pages/Login";
import MultiItemPage from "../components/pages/MultiItemPage";
import Order from "../components/pages/Order";
import Registrate from "../components/pages/Registration";
import SingleItemPage from "../components/pages/SingleItemPage";

//todo: use SecureRoute for login

export default function Navigate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/clothes/:type"} element={<MultiItemPage />} />
        <Route
          path={"/clothes/formal-wear/:clothingId"}
          element={<SingleItemPage />}
        />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/order"} element={<Order />} />
        <Route path={"/registrate"} element={<Registrate />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
