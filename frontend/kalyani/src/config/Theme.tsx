import { Theme } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#e0f2f1",
      dark: "#4DB6AC",
      contrastText: "#000",
    },
    secondary: {
      main: "#B2DFDB",
      contrastText: "#000",
    },
    success: {
      main: "#009D00",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

export default theme;
