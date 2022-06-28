import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registrate from "../components/pages/Registration";
import Checkout from "../components/pages/CheckoutPage";
import Homepage from "../components/pages/Homepage";
import Login from "../components/pages/Login";
import MultiItemPage from "../components/pages/MultiItemPage";
import SingleItemPage from "../components/pages/SingleItemPage";
import Order from "../components/pages/Order";
import App from "../App";
import SearchProvider from "../context/SearchContext";

export default function Navigate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/clothes"} element={<MultiItemPage />} />
        <Route path={"/clothes/:id"} element={<SingleItemPage />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/order"} element={<Order />} />
        <Route path={"/registrate"} element={<Registrate />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
