import React, { useCallback } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import HTMLReactParser from "html-react-parser";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Button, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import DarkMode from "./../../Services/Dark-mode";
import MobileMenu from "Layouts/Header/Mobile-menu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    "& .ts-particles": {
      position: "relative",
      zIndex: 1,
    },
    "& .social-medias": {
      position: "absolute",
      bottom: "0",
      left: "50px",
      zIndex: 3,
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      "& ul": {
        lineHeight: 0,
        "& li": {
          display: "inline-block",
          "&:not(:last-child)": {
            marginRight: theme.spacing(3),
          },
          "& a": {
            color: theme.palette.text.light,
            transition: theme.transitions.easing.easeOut,
            display: "block",
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
        color: theme.palette.text.light,
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    "& .MuiGrid-root": {
      "& .MuiGrid-item": {
        "& .slider-content": {
          position: "relative",
          zIndex: 3,
          "& .title": {
            fontWeight: theme.typography.fontWeightBold,
            position: "relative",
            zIndex: 2,
            marginBottom: theme.spacing(3),
          },
          "& .title, .description": {
            color: theme.palette.text.light,
          },
          "& .Typewriter": {
            marginBottom: theme.spacing(5),
            "& .Typewriter__wrapper": {
              fontSize: theme.typography.h3.fontSize,
              fontWeight: theme.typography.fontWeightMedium,
              color: theme.palette.text.light,
            },
          },
          "& .MuiButtonBase-root": {
            background: "#fff",
            padding: theme.spacing(3, 4),
            borderRadius: theme.shape.borderRadius7,
            color: theme.palette.text.gray,
            fontWeight: theme.typography.fontWeightBold,
            minWidth: "200px",
            fontSize: theme.typography.h3.fontSize,
          },
        },
        "& .profile-image": {
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            height: "500px",
            width: "700px",
            background: `url('${Image}')`,
            zIndex: 1,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          },
          "& .img-holder": {
            backgroundPosition: "100% 10%",
            position: "relative",
            zIndex: 2,
            "&::before": {
              content: "''",
              position: "absolute",
              left: "50%",
              bottom: "-130px",
              transform: "translateX(-50%)",
              borderRadius: "50%",
              background:
                theme.palette.mode === "light"
                  ? `linear-gradient(to bottom, transparent 25%, #ffffff4f 65%)`
                  : `linear-gradient(to bottom, transparent 25%, ${theme.palette.primary.main} 65%)`,
              zIndex: 1,
            },
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: "60vh",
      padding: theme.spacing(10, 0),
      justifyContent: "flex-start",
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          "& .slider-content": {
            padding: theme.spacing(7),
            "& .title": {
              fontSize: theme.typography.h1,
            },
          },
          "& .profile-image": {
            "& .img-holder": {
              height: "330px",
              width: "330px",
              "&::before": {
                height: "350px",
                width: "100%",
              },
            },
          },
        },
      },
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: "60vh",
      justifyContent: "center",
      padding: theme.spacing(10, 0),
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          "& .slider-content": {
            padding: theme.spacing(7),
            "& .title": {
              fontSize: theme.typography.customFont2,
            },
          },
          "& .profile-image": {
            "& .img-holder": {
              height: "550px",
              width: "500px",
              "&::before": {
                height: "600px",
                width: "600px",
              },
            },
          },
        },
      },
    },
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      padding: theme.spacing(0, 7),
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          "& .slider-content": {
            "& .title": {
              fontSize: theme.typography.customFont3,
            },
          },
          "& .profile-image": {
            "& .img-holder": {
              height: "550px",
              width: "500px",
              "&::before": {
                height: "600px",
                width: "600px",
              },
            },
          },
        },
      },
    },
  },
}));

const Image = "https://sandeep.com.np/uploads/images/profile-bg.png";
const Image2 = "https://sandeep.com.np/uploads/images/sandeep.webp";
const download = "https://sandeep.com.np/uploads/images/new-sandip.pdf";
const slider = [
  {
    title: "Sandeep Chaudhary",
    description: "Front-End Developer",
    summary: "I'm a Front-End Developer",
    image: Image2,
    file: download,
  },
];

const profile = {
  facebook: "https://www.facebook.com/sond33p99",
  twitter: "https://twitter.com/sond33p99",
  instagram: "https://www.instagram.com/sond33p99/",
  linkedin: "https://www.linkedin.com/in/sandeep-chaudhary-5349a7193/",
  youtube: "https://www.youtube.com/channel/UCrsg43O4_nYrTpANKZLbdHw",
};
const HomeSlider = () => {
  const classes = useStyles();

  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
    // await loadFull(container);
  }, []);

  return (
    <>
      <DarkMode />
      <MobileMenu />
      {slider && slider.length ? (
        <section className={classes.root} id="home">
          <Particles
            className="ts-particles"
            canvasClassName="canvas-class-name"
            canvasId="canvas-class-name"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: {
                zIndex: 1,
              },
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onDiv: {
                    elementId: "repulse-div",
                    enable: false,
                    mode: "repulse",
                  },
                  onHover: {
                    enable: true,
                    mode: "connect",
                    parallax: {
                      enable: false,
                      force: 60,
                      smooth: 10,
                    },
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    speed: 3,
                  },
                  connect: {
                    distance: 80,
                    lineLinked: {
                      opacity: 0.5,
                    },
                    radius: 60,
                  },
                  grab: {
                    distance: 400,
                    lineLinked: {
                      opacity: 1,
                    },
                  },
                  push: {
                    quantity: 4,
                  },
                  remove: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "random",
                },
                lineLinked: {
                  blink: false,
                  color: "#ffffff",
                  consent: false,
                  distance: 150,
                  enable: false,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  attract: {
                    enable: false,
                    rotate: {
                      x: 600,
                      y: 1200,
                    },
                  },
                  bounce: true,
                  direction: "none",
                  enable: true,
                  outMode: "out",
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  limit: 200,
                  value: 200,
                },
                opacity: {
                  animation: {
                    enable: false,
                    minimumValue: 0.1,
                    speed: 1,
                    sync: false,
                  },
                  random: false,
                  value: 0.2,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  animation: {
                    enable: false,
                    minimumValue: 0.1,
                    speed: 10,
                    sync: false,
                  },
                  random: true,
                  value: 5,
                },
              },
              polygon: {
                draw: {
                  enable: false,
                  lineColor: "#ffffff",
                  lineWidth: 0.5,
                },
                move: {
                  radius: 10,
                },
                scale: 1,
                type: "none",
                url: "",
              },
              background: {
                color: "transparent",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover",
              },
            }}
          />
          <Typography component="div" className="social-medias">
            <Typography variant="h6" className="follow-me" fontSize="medium">
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
          {slider.map((item, i) => {
            const sliderDescription = HTMLReactParser(item.summary);
            const sliderDescriptionFinalText =
              sliderDescription[0]?.props?.children;
            return (
              <Grid
                container
                spacing={4}
                key={i + "_"}
                alignItems="center"
                sx={{ pt: { sm: 0, md: 0, lg: 10 } }}
              >
                <Grid item sm={12} md={12} lg={6}>
                  <Typography component="div" className="slider-content">
                    <Typography variant="h1" className="title">
                      {item.title}
                    </Typography>
                    <Typewriter
                      options={{
                        strings: [
                          `${item.summary}`,
                          sliderDescriptionFinalText,
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    <Button variant="contained" href={item.file} download target="_blank" rel="noreferrer">
                      My Resume
                    </Button>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={12} lg={6}>
                  <Typography component="div" className="profile-image">
                    <Typography
                      component="div"
                      className="img-holder background-image"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                      }}
                    />
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </section>
      ) : null}
    </>
  );
};

export default HomeSlider;
