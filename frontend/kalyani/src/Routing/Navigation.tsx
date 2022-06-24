import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Homepage from "../components/pages/Homepage";
import Login from "../components/pages/Login";
import MultiItemPage from "../components/pages/MultiItemPage";
import Registrate from "../components/pages/Registration";
import SingleItemPage from "../components/pages/SingleItemPage";
// import your route components too
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="registrate" element={<Registrate />}>
            <Route path="login:userId" element={<Login />} />
            <Route path="multipage" element={<MultiItemPage />} />
            <Route path="singlepage" element={<SingleItemPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
