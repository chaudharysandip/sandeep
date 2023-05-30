import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import HTMLReactParser from "html-react-parser";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .introduction": {
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          "& .img-holder": {
            position: "relative",
            "&::before": {
              content: "''",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "100% ",
              width: "100%",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,.25)",
            },
            "&::after": {
              content: "''",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
              width: "100%",
              background:
                theme.palette.mode === "dark"
                  ? `linear-gradient(to bottom, transparent 25%, ${theme.palette.primary.main} 65%)`
                  : `linear-gradient(to bottom, transparent 25%, #8a70c6 65%)`,
              borderRadius: "50%",
            },
            "& .bg-stretch": {
              top: "-100px",
              left: "50%",
              transform: "translateX(-50%)",
              position: "absolute",
              backgroundPosition: "100% 10%",
            },
          },
          "& .content-holder": {
            "& .sub-title": {
              textTransform: "uppercase",
              fontSize: theme.typography.h3,
              fontWeight: theme.typography.fontWeightSemiBold,
              background:
                "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
            "& .title": {
              color: "#fff",
              fontSize: theme.typography.customFont2,
              fontWeight: theme.typography.fontWeightSemiBold,
              lineHeight: 1,
            },
            "& .description": {
              color: "#fff",
              lineHeight: 2,
              fontWeight: theme.typography.fontWeightMedium,
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
        },
      },
    },
    "@media(max-width: 600px)": {
      padding: theme.spacing(10, 0, 0),
      "& .introduction": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            "& .img-holder": {
              height: "370px",
              width: "370px",
              "& .bg-stretch": {
                height: "340px",
                width: "340px",
              },
            },
          },
        },
      },
    },
    "@media(min-width: 768px)": {
      padding: theme.spacing(10, 0, 0),
      "& .introduction": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            "& .img-holder": {
              height: "400px",
              width: "400px",
              margin: "0 auto",
              "& .bg-stretch": {
                height: "355px",
                width: "355px",
              },
            },
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      padding: theme.spacing(20, 0),
      "& .introduction": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            "& .img-holder": {
              height: "500px",
              width: "500px",
              margin: "0",
              "& .bg-stretch": {
                height: "440px",
                width: "440px",
              },
            },
          },
        },
      },
    },
  },
}));

const Image = "https://sandeep.com.np/uploads/images/sandeep.webp";
const download = "https://sandeep.com.np/uploads/images/new-sandip.pdf";
const aboutUs = {
  title: "About Me",
  summary: "I can develop that help people",
  description:
    "Hi there! My name is Sandeep Chaudhary, and I am a Front-End Developer. " +
    "I have a passion for Coding and Browsing Internet, and " +
    "I enjoy spending my free time Learning new things. I am" +
    " constantly seeking new challenges and opportunities for" +
    " personal and professional growth. On this page, you'll " +
    "find a glimpse into my background, interests, and " +
    "achievements. I hope you enjoy learning a little bit " +
    "more about me!",
  image: Image,
  file: download,
};
const Introduction = () => {
  const classes = useStyles();

  return aboutUs ? (
    <section className={classes.root} id="about-us">
      <Container className="introduction">
        <Grid container spacing={3} justifyContent="center">
          <Grid item lg={6} md={12} sm={12}>
            <Typography component="div" className="img-holder">
              <Typography
                component="div"
                className="bg-stretch background-image"
                style={{
                  backgroundImage: `url('${aboutUs.image}')`,
                }}
              />
            </Typography>
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Typography component="div" className="content-holder">
              <Typography vaiant="h5" className="sub-title" mb={1}>
                {aboutUs.title}
              </Typography>
              <Typography vaiant="h1" className="title" mb={6}>
                {aboutUs.summary}
              </Typography>
              <Typography component="div" className="description" mb={6}>
                {HTMLReactParser(aboutUs.description)}
              </Typography>
              <Button variant="contained" href={aboutUs.file} download target="_blank" rel="noreferrer">
                My Resume
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  ) : null;
};

export default Introduction;
