import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
  } from "@mui/material";
  import DarkModeIcon from "@mui/icons-material/DarkMode";
  import LightModeIcon from "@mui/icons-material/LightMode";
  import { useThemeMode } from "../context/ThemeContext";
  import { useAuth } from "../context/AuthContext";
  import { useNavigate } from "react-router-dom";
  
  const Header = () => {
    const { toggleTheme, mode } = useThemeMode();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
  
    return (
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar>
          <Typography fontWeight={700} sx={{ flexGrow: 1, cursor:'pointer' }} onClick={() => navigate("/")}>
            Blog
          </Typography>
  
          <IconButton onClick={toggleTheme}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
  
          {user ? (
            <>
              <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button onClick={() => navigate("/login")}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;
  