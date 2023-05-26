import React, { useCallback } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
// import DarkMode3 from "../../dark-mode/3/dark-mode";
import Typewriter from "typewriter-effect";
import HTMLReactParser from "html-react-parser";
import Particles from "react-particles";
import Image from "../../Assets/Images/profile-bg.png";
import Image2 from "../../Assets/Images/sandeep-v2.webp";
import { loadFull } from "tsparticles";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

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
            color: "#fff",
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
        color: "#fff",
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    "& .content-holder": {
      zIndex: 1,
      "& .profile-image": {
        position: "absolute",
        right: "116px",
        bottom: "-7px",
        "& .img-holder": {
          height: "550px",
          width: "500px",
          backgroundPosition: "100% 10%",
          "&::before": {
            content: "''",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            height: "500px",
            width: "700px",
            background: `url('${Image}')`,
            zIndex: -2,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          },
          "&::after": {
            content: "''",
            position: "absolute",
            left: "50%",
            bottom: "-130px",
            transform: "translateX(-50%)",
            height: "600px",
            width: "600px",
            borderRadius: "50%",
            background: `linear-gradient(to bottom, transparent 25%, ${theme.palette.primary.main} 65%)`,
            zIndex: 1,
          },
        },
      },
      "& .title": {
        fontWeight: theme.typography.fontWeightBold,
        position: "relative",
        zIndex: 2,
        marginBottom: theme.spacing(3),
      },
      "& .title, .description": {
        color: "#fff",
      },
      "& .Typewriter": {
        marginBottom: theme.spacing(5),
        "& .Typewriter__wrapper": {
          fontSize: theme.typography.h3.fontSize,
          fontWeight: theme.typography.fontWeightMedium,
          color: "#fff",
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
    "@media(max-width: 600px)": {
      height: "60vh",
      padding: theme.spacing(10, 3, 0),
      justifyContent: "flex-start",
      "& .content-holder": {
        "& .profile-image": {
          "& .img": {
            height: "330px",
          },
        },
        "& .title": {
          fontSize: theme.typography.h1.fontSize,
        },
      },
    },
    "@media(min-width: 768px)": {
      height: "60vh",
      justifyContent: "center",
      padding: theme.spacing(10, 3, 0),
      "& .content-holder": {
        "& .title": {
          fontSize: theme.typography.customFont2,
        },
      },
    },
    "@media(min-width: 992px)": {
      height: "100vh",
      padding: theme.spacing(0, 7),
      "& .content-holder": {
        "& .profile-image": {
          "& .img": {
            height: "400px",
          },
        },
        "& .title": {
          fontSize: theme.typography.customFont3,
        },
      },
    },
  },
}));

const slider = [
  {
    title: "Sandeep Chaudhary",
    description: "Front-End Developer",
    summary: "I'm a Front-End Developer",
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
      {/*<DarkMode3 profile={profile}/>*/}
      {slider && slider.length ? (
        <section className={classes.root}>
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
              <Typography
                component="div"
                className="content-holder"
                align="left"
                key={i + "_"}
              >
                <Typography component="div" className="profile-image">
                  <Typography
                    component="div"
                    className="img-holder background-image"
                    style={{
                      backgroundImage: `url('${Image2}')`,
                    }}
                  />
                </Typography>
                <Typography variant="h1" className="title">
                  {item.title}
                </Typography>
                <Typewriter
                  options={{
                    strings: [`${item.summary}`, sliderDescriptionFinalText],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <Button variant="contained" href="#" download>
                  My Resume
                </Button>
              </Typography>
            );
          })}
        </section>
      ) : null}
    </>
  );
};

export default HomeSlider;
