import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Registrate from "./components/pages/Registration";
import { CssBaseline } from "@mui/material";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./config/Theme";
import Navigate from "./Routing/Navigation";
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Navigate />
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default App;
