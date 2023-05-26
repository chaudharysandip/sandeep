import React from "react";
import Slider from "react-slick";
import HTMLReactParser from "html-react-parser";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "Assets/Images/sandeep.jpg";
import Image2 from "Assets/Images/laxman.jpg";
import Image3 from "Assets/Images/aarya.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .testimonial": {
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
      "& .testimonial-slider": {
        "& .img-holder": {
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          position: "relative",
          "& .secondary-image": {
            position: "absolute",
            right: 0,
            bottom: 0,
            background: theme.palette.primary.main,
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            "& .MuiSvgIcon-root": {
              fontSize: theme.typography.h3.fontSize,
              color: "#fff",
            },
          },
        },
        "& .description": {
          color: "#fff",
          fontWeight: theme.typography.fontWeightMedium,
          lineHeight: 2,
        },
      },
    },
    "@media(max-width: 600px)": {
      padding: theme.spacing(10, 0),
      "& .testimonial": {
        "& .testimonial-slider": {},
      },
    },
    "@media(min-width: 768px)": {
      padding: theme.spacing(10, 0),
      "& .testimonial": {
        "& .testimonial-slider": {},
      },
    },
    "@media(min-width: 992px)": {
      padding: theme.spacing(0, 0, 20),
      "& .testimonial": {
        "& .testimonial-slider": {
          width: "700px !important",
        },
      },
    },
  },
}));

const testimonial = [
  {
    name: "Sandeep Chaudhary",
    designation: "Front-End Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" +
      " the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
      "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
      "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of " +
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus " +
      "PageMaker including versions of Lorem Ipsum.",
    image: Image,
  },
  {
    name: "Laxman Magrati",
    designation: "Flutter Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" +
      " the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
      "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
      "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of " +
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus " +
      "PageMaker including versions of Lorem Ipsum.",
    image: Image2,
  },
  {
    name: "Aarya Chaudhary",
    designation: "Java Developer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" +
      " the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
      "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
      "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of " +
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus " +
      "PageMaker including versions of Lorem Ipsum.",
    image: Image3,
  },
];
const Testimonial = () => {
  const classes = useStyles();

  const settings = {
    dots: false,
    fade: true,
    infinite: testimonial?.length > 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return testimonial && testimonial.length ? (
    <section className={classes.root}>
      <Container className="testimonial">
        <Typography
          component="div"
          className="text-holder"
          align="center"
          mb={5}
        >
          <Typography variant="h6" className="sub-title">
            My Experience
          </Typography>
          <Typography variant="h1" className="title">
            Customers Feedback
          </Typography>
        </Typography>
        <Slider {...settings}>
          {testimonial.map((item, i) => {
            return (
              <Box
                component="div"
                className="testimonial-slider"
                key={i + "__"}
                align="center"
                margin="0 auto"
                display="block !important"
              >
                <Typography
                  component="div"
                  className="img-holder background-image"
                  mb={3}
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="secondary-image">
                    <FormatQuoteRoundedIcon />
                  </div>
                </Typography>
                <Typography component="div" className="description">
                  {HTMLReactParser(item.description)}
                </Typography>
                <Typography
                  variant="h3"
                  className="name"
                  mb={1}
                  color="#fff"
                  fontSize="18px"
                  fontWeight="bold"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h6"
                  className="designation"
                  color="#fff"
                  fontStyle="italic"
                  fontSize="16px"
                >
                  {item.designation}
                </Typography>
              </Box>
            );
          })}
        </Slider>
      </Container>
    </section>
  ) : null;
};

export default Testimonial;
