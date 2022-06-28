import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/Theme";
import Navigate from "./Routing/Navigation";
import SearchProvider from "./context/SearchContext";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigate />
    </ThemeProvider>
  );
};

export default App;
