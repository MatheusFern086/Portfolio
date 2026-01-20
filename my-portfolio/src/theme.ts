import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
    //"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
    //"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"
    //"Segoe UI Emoji",
    //"Segoe UI Symbol",
    //"Apple Color Emoji",
    //"sans-serif"
  },
});

theme = responsiveFontSizes(theme);
export default theme;