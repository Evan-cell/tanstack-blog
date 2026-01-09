import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeProviderCustom, useThemeMode } from "./context/ThemeContext";
import { getTheme } from "./theme";

const Root = () => {
  const { mode } = useThemeMode();

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <Root />
    </ThemeProviderCustom>
  </React.StrictMode>
);

reportWebVitals();
