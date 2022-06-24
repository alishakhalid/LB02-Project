import { Theme } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#4d4d4d",
      light: "#b3b3b3",
      dark: "#262626",
      contrastText: "#f1f1f1",
    },
    secondary: {
      main: "#0069ff",
      light: "#7fb5ff",
      dark: "#003580",
      contrastText: "#ffff",
    },
    text: {
      primary: "#262626",
      secondary: "#808080",
      disabled: "#d9d9d9",
      hint: "#b3b3b3",
    },
    error: {
      main: "#ff1100",
      light: "#ff887f",
      dark: "#800800",
      contrastText: "#f1f1f1",
    },
    warning: {
      main: "#ffd800",
      light: "#ffec7f",
      dark: "#7f6c00",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2dd032",
      light: "#97d199",
      dark: "#1c801f",
      contrastText: "#ffffff",
    },
    common: {
      black: "#262626",
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

export default theme;
