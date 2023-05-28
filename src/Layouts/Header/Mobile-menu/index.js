import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 0",
    position: "absolute",
    zIndex: 4,
    top: "27px",
    left: "30px",
    "& .mobile-menu": {
      "& .bm-burger-button": {
        position: "absolute",
        width: "20px",
        height: "17px",
        left: "10px",
        top: "50%",
        transform: "translate(0, -50%)",
        outline: "none",
      },
      "& #react-burger-menu-btn": {
        outline: "none",
      },
      "& .bm-burger-bars": {
        background:
          theme.palette.mode === "light"
            ? "#000 !important"
            : "#fff !important",
        height: "12% !important",
      },
      "& .bm-burger-bars-hover": {
        background: theme.palette.primary.main,
        opacity: 1,
      },
      "& .bm-cross-button": {
        right: "20px !important",
      },
      "& .bm-cross": {
        background: theme.palette.mode === "light" ? "#000" : "#fff",
      },
      "& .bm-menu-wrap": {
        position: "fixed",
        height: "100%",
        left: "0",
        top: "0",
      },
      "& .bm-menu": {
        background: theme.palette.primary.main,
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
      },
      "& .bm-morph-shape": {
        fill: "#373a47",
      },
      "& .bm-item-list": {
        color: "#b8b7ad",
        padding: "0.8em",
      },
      "& .bm-item": {
        display: "inline-block",
        margin: "0",
        padding: theme.spacing(0),
        outline: "none",
        color: theme.palette.mode === "light" ? "#000" : "#fff",
        fontSize: theme.typography.h4,
        transition: theme.transitions.easing.easeOut,
        "&:not(:last-child)": {
          marginBottom: theme.spacing(3),
        },
        "&:hover": {
          color: "#fca000",
        },
      },
      "& .bm-overlay": {
        background: "rgba(0, 0, 0, 0.3)",
        top: "0",
        left: "0",
        zIndex: "1001 !important",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.between("sm", "md")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  const handleStateChange = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className={classes.root}>
      <Typography component="div" className="mobile-menu">
        <Menu
          disableAutoFocus
          isOpen={menuOpen}
          onOpen={handleStateChange}
          onClose={handleStateChange}
        >
          <Link
            id="home"
            className="menu-item"
            to="/"
            onClick={() => closeMenu()}
          >
            Home
          </Link>
          <Link className="menu-item" to="#" onClick={() => closeMenu()}>
            About
          </Link>
          <Link onClick={() => closeMenu()} className="menu-item" to="#">
            Resume
          </Link>
          <Link onClick={() => closeMenu()} className="menu-item" to="#">
            Service
          </Link>
          <Link onClick={() => closeMenu()} className="menu-item" to="#">
            Portfolio
          </Link>
          <Link onClick={() => closeMenu()} className="menu-item" to="#">
            Blogs
          </Link>
          <Link onClick={() => closeMenu()} className="menu-item" to="#">
            Contact
          </Link>
        </Menu>
      </Typography>
    </header>
  );
};

export default MobileMenu;
