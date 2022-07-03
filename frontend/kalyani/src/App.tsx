import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/Theme";
import Navigate from "./Routing/Navigation";
import SearchProvider from "./context/SearchContext";
import { SnackbarContextProvider } from "./context/SnackbarContext";
import React from "react";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarContextProvider>
        <Navigate />
      </SnackbarContextProvider>
    </ThemeProvider>
  );
};

export default App;
