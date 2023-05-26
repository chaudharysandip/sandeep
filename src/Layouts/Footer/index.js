import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      theme.palette.mode === "light" ? theme.palette.primary.main : "#2b2b2b",
    padding: theme.spacing(10, 0),
    "& .footer": {
      "& .copy-right": {
        "& .social-medias": {
          "& ul": {
            "& li": {
              display: "inline-block",
              "&:not(:last-child)": {
                marginRight: theme.spacing(3),
              },
              "& a": {
                color: "#fff",
                transition: theme.transitions.easing.easeOut,
                "& .MuiSvgIcon-root": {
                  transition: theme.transitions.easing.easeOut,
                },
                "&:hover": {
                  color: "#fff",
                  "& .MuiSvgIcon-root": {
                    transform: "scale(1.2) rotate(-5deg)",
                  },
                },
              },
            },
          },
          "& .follow-me": {
            fontSize: theme.typography.h3,
            color: "#fff",
            fontWeight: theme.typography.fontWeightMedium,
          },
        },
        "& .copy-right-text": {
          fontSize: theme.typography.h4,
          color: "#fff",
          fontWeight: theme.typography.fontWeightSemiBold,
        },
      },
    },
    "@media(max-width: 600px)": {
      "& .footer": {
        "& .copy-right": {
          flexWrap: "wrap",
          justifyContent: "center",
        },
      },
    },
    "@media(min-width: 992px)": {
      marginLeft: "110px",
    },
  },
}));

const profile = {
  facebook: "https://www.facebook.com/sond33p99",
  twitter: "https://twitter.com/sond33p99",
  instagram: "https://www.instagram.com/sond33p99/",
  linkedin: "https://www.linkedin.com/in/sandeep-chaudhary-5349a7193/",
  youtube: "https://www.youtube.com/channel/UCrsg43O4_nYrTpANKZLbdHw",
};

const Footer = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className="footer">
        <Typography
          component="div"
          className="copy-right"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            component="div"
            className="social-medias"
            display="flex"
            alignItems="center"
            gap={3}
          >
            <Typography variant="h6" className="follow-me">
              Follow me:
            </Typography>
            <ul>
              {profile.facebook && (
                <li>
                  <a href={profile.facebook} target="_blank" rel="noreferrer">
                    <FacebookIcon />
                  </a>
                </li>
              )}
              {profile.instagram && (
                <li>
                  <a href={profile.instagram} target="_blank" rel="noreferrer">
                    <InstagramIcon />
                  </a>
                </li>
              )}
              {profile.linkedin && (
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon />
                  </a>
                </li>
              )}
              {profile.youtube && (
                <li>
                  <a href={profile.youtube} target="_blank" rel="noreferrer">
                    <YouTubeIcon />
                  </a>
                </li>
              )}
              {profile.twitter && (
                <li>
                  <a href={profile.twitter} target="_blank" rel="noreferrer">
                    <TwitterIcon />
                  </a>
                </li>
              )}
            </ul>
          </Typography>
          <Typography component="div" className="copy-right-text">
            © Copyright {new Date().getFullYear()} {profile.name}
          </Typography>
        </Typography>
      </Container>
    </section>
  );
};

export default Footer;
