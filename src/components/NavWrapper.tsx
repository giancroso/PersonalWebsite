import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DarkMode from "@mui/icons-material/DarkMode";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { useColorScheme } from "@mui/material/styles";
import { useTitle } from "../context/TitleProvider";
import Drawer from "@mui/material/Drawer";
import NavSidebar from "./NavSidebar";

const MODES: ("system" | "light" | "dark")[] = ["system", "light", "dark"];
const DRAWER_WIDTH = 240;

const NavWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileDrawerOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileDrawerOpen(!mobileDrawerOpen);
    }
  };

  const [anchorElMode, setAnchorElMode] = React.useState<null | HTMLElement>(
    null
  );

  const { title } = useTitle();

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const handleOpenModeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMode(event.currentTarget);
  };

  const handleCloseModeMenu = () => {
    setAnchorElMode(null);
  };

  const handleModeSelection = (mode: "system" | "light" | "dark") => {
    setMode(mode);
    handleCloseModeMenu();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open nav"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Tooltip title="Mode Selection">
            <IconButton onClick={handleOpenModeMenu} sx={{ p: 0 }}>
              <DarkMode />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar-mode"
            anchorEl={anchorElMode}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElMode)}
            onClose={handleCloseModeMenu}
          >
            {MODES.map((mode) => (
              <MenuItem key={mode} onClick={() => handleModeSelection(mode)}>
                <Typography sx={{ textAlign: "center" }}>{mode}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="pages"
      >
        <Drawer
          variant="temporary"
          open={mobileDrawerOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          <NavSidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
          open
        >
          <NavSidebar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default NavWrapper;
