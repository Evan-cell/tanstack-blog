import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#6366f1",
      },
      background: {
        default: mode === "dark" ? "#0f172a" : "#f9fafb",
        paper: mode === "dark" ? "#020617" : "#ffffff",
      },
    },
    shape: {
      borderRadius: 16,
    },
  });
