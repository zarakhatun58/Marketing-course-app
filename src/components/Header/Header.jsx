import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownEl, setDropdownEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { user, logOut } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDropdownEl(null);
  };

  const handleDropdownClick = (event) => {
    setDropdownEl(event.currentTarget);
  };

  const handleLogOut = () => {
    logOut();
    handleClose();
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Courses",
      link: "/courses",
      dropdown: [
        { name: "Digital Marketing", link: "/digital" },
        { name: "Social Media Marketing", link: "/social" },
        {
          name: "Email Marketing Essentials",
          link: "/emailMarketing",
        },
        {
          name: "Content Marketing Strategy",
          link: "/contentMarketing",
        },
        { name: "Google Ads Mastery", link: "/googleAds" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  if (user && user.email) {
    menuItems.push(
      { name: user.displayName, link: "/" },
      { name: "Logout", link: "/", action: handleLogOut }
    );
  } else {
    menuItems.push({ name: "Login", link: "/signIn" });
    menuItems.push({ name: "Sign Up", link: "/signUp" });
  }

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "rgb(239 236 241 / 54%)", color: "#393737" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          style={{ textAlign: "left", width: "100px" }}
        >
          BesideU
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{ style: { width: "fit-content" } }}
            >
              {menuItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <MenuItem
                      aria-haspopup="true"
                      onClick={handleDropdownClick}
                    >
                      {item.name}
                    </MenuItem>
                    <Menu
                      id="dropdown-menu"
                      anchorEl={dropdownEl}
                      keepMounted
                      open={Boolean(dropdownEl)}
                      onClose={handleClose}
                      PaperProps={{ style: { width: "fit-content" } }}
                    >
                      {item.dropdown.map((subItem) => (
                        <MenuItem
                          key={subItem.name}
                          onClick={handleClose}
                          component={Link}
                          to={subItem.link}
                        >
                          {subItem.name}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                ) : item.action ? (
                  <MenuItem key={item.name} onClick={item.action}>
                    {item.name}
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={item.name}
                    onClick={handleClose}
                    component={Link}
                    to={item.link}
                  >
                    {item.name}
                  </MenuItem>
                )
              )}
            </Menu>
          </>
        ) : (
          <div className="contentDiv">
            {menuItems.map((item) =>
              item.dropdown ? (
                <Box
                  key={item.name}
                  sx={{ display: "inline-block", position: "relative" }}
                >
                  <Button
                    color="inherit"
                    onClick={handleDropdownClick}
                    aria-controls="dropdown-menu"
                    aria-haspopup="true"
                  >
                    {item.name}
                  </Button>
                  <Menu
                    id="dropdown-menu"
                    anchorEl={dropdownEl}
                    keepMounted
                    open={Boolean(dropdownEl)}
                    onClose={handleClose}
                    PaperProps={{ style: { width: "fit-content" } }}
                    sx={{
                      mt: 1,
                      "& .MuiPaper-root": {
                        left: "auto",
                        right: 0,
                      },
                    }}
                  >
                    {item.dropdown.map((subItem) => (
                      <MenuItem
                        key={subItem.name}
                        onClick={handleClose}
                        component={Link}
                        to={subItem.link}
                      >
                        {subItem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : item.action ? (
                <Button key={item.name} color="inherit" onClick={item.action}>
                  {item.name}
                </Button>
              ) : (
                <Button
                  key={item.name}
                  color="inherit"
                  component={Link}
                  to={item.link}
                >
                  {item.name}
                </Button>
              )
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
