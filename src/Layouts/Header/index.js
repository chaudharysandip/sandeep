import React from "react";
import Image from "Assets/Images/logo.png";
import Image2 from "Assets/Images/colored-logo.png";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import {useTheme} from "@mui/styles";
import Scrollspy from 'react-scrollspy';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        top: 0,
        left: "0",
        bottom: 0,
        width: "110px",
        zIndex: 2,
        borderRight:
            theme.palette.mode === "dark"
                ? "1px solid rgba(255,255,255,.25)"
                : `1px solid #d4d4d4`,
        background: theme.palette.primary.main,
        "& .header-24": {
            "& .profile-bg": {
                position: "relative",
                padding: theme.spacing(2),
                borderBottom:
                    theme.palette.mode === "dark"
                        ? "1px solid rgba(255,255,255,.25)"
                        : `1px solid #d4d4d4`,
                "& img": {
                    maxHeight: "100px",
                    objectFit: "contain",
                    width: "100%",
                },
                "& .title": {
                    color: theme.palette.text.gray,
                },
            },
            "& .navigation": {
                "& li": {
                    "&:not(:last-child)": {
                        borderBottom:
                            theme.palette.mode === "dark"
                                ? "1px solid rgba(255,255,255,.25)"
                                : `1px solid #d4d4d4`,
                    },
                    "& a": {
                        color: theme.palette.text.light,
                        fontWeight: theme.typography.fontWeightMedium,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: theme.spacing(4, 4),
                        transition: theme.transitions.easing.easeOut,
                        position: "relative",
                        "& .MuiSvgIcon-root": {
                            marginRight: theme.spacing(2),
                            fontSize: "32px",
                            position: "relative",
                            left: 0,
                            transition: theme.transitions.easing.easeOut,
                        },
                        "& span": {
                            position: "absolute",
                            left: "-30px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            visibility: "hidden",
                            opacity: 0,
                            transition: theme.transitions.easing.easeOut,
                            textAlign: "center",
                            display: "block",
                            width: "100%",
                            textTransform: "uppercase",
                        },
                        "&:hover": {
                            "& .MuiSvgIcon-root": {
                                left: "40px",
                                visibility: "hidden",
                                opacity: 0,
                            },
                            "& span": {
                                left: 0,
                                visibility: "visible",
                                opacity: 1,
                            },
                        },
                    },
                },
            },
        },
        "@media(width < 600px)": {
            display: "none",
        },
        "@media(width >= 768px)": {
            display: "none",
        },
        "@media(width >= 992px)": {
            display: "block",
        },
    },
}));

const menu = [
    {
        name: "About",
        id: "about-us",
    },
    {
        name: "Resume",
        id: "resume",
    },
    {
        name: "Service",
        id: "service",
    },
    {
        name: "Portfolio",
        id: "portfolio",
    },
    {
        name: "Blogs",
        id: "blogs",
    },
    {
        name: "Contact",
        id: "contact-us",
    },
];

const iconsMap = new Map([
    ["About", <AssignmentOutlinedIcon/>],
    ["Resume", <AccountBoxOutlinedIcon/>],
    ["Service", <SettingsOutlinedIcon/>],
    ["Portfolio", <BusinessCenterOutlinedIcon/>],
    ["Blogs", <NewspaperOutlinedIcon/>],
    ["Contact", <ContactPhoneOutlinedIcon/>],
]);

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <header className={classes.root}>
            <Typography component="div" className="header-24">
                <Typography component="div" className="profile-bg" align="center">
                    {theme.palette.mode === "dark" ? (
                        <img src={Image} alt="img"/>
                    ) : (
                        <img src={Image2} alt="img"/>
                    )}
                </Typography>
                <Typography component="nav" mt="0" mb={3} className="navigation">
                    <ul>
                        <li>
                            <Link to="/">
                                <HomeOutlinedIcon/>
                                <span>
                                      Home
                                    </span>
                            </Link>
                        </li>
                        {menu.map((item, i) => {
                            let iconValue = iconsMap.get(item?.name);
                            return (
                                <li key={i + "__"}>
                                    <Link to="#">
                                        {iconValue}
                                        <span>
                                              {item.name}
                                            </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </Typography>
            </Typography>
        </header>
    );
};
export default Header;
