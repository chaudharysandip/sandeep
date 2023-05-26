import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "Assets/Images/html.svg";
import Image2 from "Assets/Images/css.svg";
import Image3 from "Assets/Images/js.svg";
import Image4 from "Assets/Images/react-js-img.svg";
import Image5 from "Assets/Images/nodejs.svg";
import Image6 from "Assets/Images/figma.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .service-block-21": {
      background: theme.palette.primary.main,
      borderRadius: "15px",
      "& .text-holder": {
        position: "relative",
        paddingBottom: theme.spacing(4),
        "&::before": {
          content: "''",
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          background: "#fff",
          height: "2px",
          width: "100px",
        },
        "& .sub-title": {
          textTransform: "uppercase",
          fontSize: theme.typography.h3.fontSize,
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
        },
      },
      "& .MuiGrid-root": {
        "& .MuiGrid-item": {
          width: "100%",
          "& .service-list": {
            border: "1px solid rgba(255,255,255,.1)",
            background: "rgba(255,255,255,.1)",
            padding: theme.spacing(3),
            borderRadius: theme.shape.borderRadius5,
            transition: theme.transitions.easing.easeOut,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: "''",
              position: "absolute",
              bottom: 0,
              right: 0,
              background: theme.palette.primary.main,
              borderRadius: theme.shape.borderRadius,
              height: "0%",
              width: "0%",
              transition: theme.transitions.easing.easeOut,
            },
            "& .icon-holder": {
              position: "relative",
              zIndex: 1,

              "& img": {
                maxHeight: "60px",
              },
            },
            "& .content-holder": {
              position: "relative",
              zIndex: 1,
              "& .service-title": {
                color: "#fff",
                fontSize: theme.typography.h2,
                fontWeight: theme.typography.fontWeightSemiBold,
              },
              "& .description": {
                color: "#fff",
                fontWeight: theme.typography.fontWeightMedium,
                lineHeight: 1.7,
              },
            },
            "&:hover": {
              transform: "translateY(-10px)",
              "&::before": {
                height: "100%",
                width: "100%",
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      padding: theme.spacing(0, 2, 10),
      "& .service-block-21": {
        padding: theme.spacing(5),
      },
    },
    "@media(min-width: 768px)": {
      padding: theme.spacing(0, 3, 10),
      "& .service-block-21": {
        padding: theme.spacing(5),
      },
    },
    "@media(min-width: 992px)": {
      padding: theme.spacing(0, 7, 20),
      "& .service-block-21": {
        padding: theme.spacing(20, 5),
      },
    },
  },
}));

const facility = [
  {
    title: "HTML",
    image: Image,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, temporibus!",
  },
  {
    title: "CSS",
    image: Image2,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, temporibus!",
  },
  {
    title: "Javascript",
    image: Image3,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, temporibus!",
  },
  {
    title: "React Js",
    image: Image4,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, temporibus!",
  },
  {
    title: "Node Js",
    image: Image5,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, temporibus!",
  },
  {
    title: "Figma",
    image: Image6,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, temporibus!",
  },
];

const WhyChooseUs = () => {
  const classes = useStyles();

  return facility && facility.length ? (
    <section className={classes.root}>
      <Container className="service-block-21">
        <Typography
          component="div"
          className="text-holder"
          align="center"
          mb={10}
        >
          <Typography variant="h6" className="sub-title">
            My Expertise
          </Typography>
          <Typography variant="h1" className="title">
            What I do
          </Typography>
        </Typography>
        <Grid container spacing={5}>
          {facility.map((item, i) => {
            return (
              <Grid item lg={4} md={12} sm={12} key={i + "__"}>
                <Typography component="div" className="service-list">
                  <Typography component="div" className="icon-holder" mb={3}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img img-fluid"
                    />
                  </Typography>
                  <Typography component="div" className="content-holder">
                    <Typography variant="h2" className="service-title" mb={2}>
                      {item.title}
                    </Typography>
                    <Typography className="description">
                      {item.summary.substring(0, 100)}
                    </Typography>
                  </Typography>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  ) : null;
};

export default WhyChooseUs;
