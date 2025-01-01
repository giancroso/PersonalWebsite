import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import App from "./App";
import { TitleProvider } from "./context/TitleProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TitleProvider>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TitleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
