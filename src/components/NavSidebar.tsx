import * as React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router";

const NavSidebar: React.FC = () => {
  const pages = ["Home", "Resume", "Blog"];

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${page !== "Home" ? page : ""}`}
            >
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NavSidebar;
