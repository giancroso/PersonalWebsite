import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
