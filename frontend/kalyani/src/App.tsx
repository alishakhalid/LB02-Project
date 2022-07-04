import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/Theme";
import { SnackbarContextProvider } from "./context/SnackbarContext";
import Navigate from "./Routing/Navigation";
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
