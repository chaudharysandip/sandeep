import React from "react";
import {makeStyles} from "@mui/styles";
import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "Assets/Images/html.svg";
import Image2 from "Assets/Images/css.svg";
import Image3 from "Assets/Images/js.svg";
import Image4 from "Assets/Images/react-js-img.svg";
import Image5 from "Assets/Images/nodejs.svg";
import Image6 from "Assets/Images/figma.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .why-choose": {
            background:
                theme.palette.mode === "dark"
                    ? theme.palette.primary.main
                    : "#ffffff0f",
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
                    color: theme.palette.text.light,
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
                                color: theme.palette.text.light,
                                fontSize: theme.typography.h2,
                                fontWeight: theme.typography.fontWeightSemiBold,
                            },
                            "& .description": {
                                color: theme.palette.text.descriptionText,
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
            "& .why-choose": {
                padding: theme.spacing(5),
            },
        },
        "@media(min-width: 768px)": {
            padding: theme.spacing(0, 3, 10),
            "& .why-choose": {
                padding: theme.spacing(5),
            },
        },
        "@media(min-width: 992px)": {
            padding: theme.spacing(0, 7, 20),
            "& .why-choose": {
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
            "With five years of experience in HTML development, I have gained a deep understanding of the language and " +
            "its best practices. Over the years, I have worked on numerous projects, acquiring a strong proficiency in " +
            "creating structured, accessible, and semantically correct markup. My expertise lies in developing " +
            "responsive and user-friendly web interfaces.",
    },
    {
        title: "CSS",
        image: Image2,
        summary:
            "With five years of experience in CSS development, I have acquired a deep understanding of the language and" +
            "its capabilities. Over the years, I have worked on various projects, honing my skills in creating visually" +
            "appealing and responsive user interfaces. My expertise lies in writing efficient CSS code and implementing" +
            " modern styling techniques.",
    },
    {
        title: "Javascript",
        image: Image3,
        summary:
            "With one year of experience in JavaScript development, I have gained a solid understanding of the language" +
            " and its capabilities. Over the past year, I have worked on various projects, expanding my skills in" +
            " front-end and back-end development using JavaScript. My expertise lies in writing clean and efficient" +
            "code to create dynamic and interactive web applications.",
    },
    {
        title: "React Js",
        image: Image4,
        summary:
            "I have been working with React.js for the past three years, during which I have gained a comprehensive" +
            "understanding of the framework and its ecosystem. I have successfully completed several projects and" +
            " collaborated with diverse teams, honing my skills in front-end development and delivering high-quality " +
            "user interfaces.",
    },
    {
        title: "Node Js",
        image: Image5,
        summary:
            "With one year of experience in Node.js development, I have gained a solid understanding of building" +
            " scalable and efficient server-side applications. Over the past year, I have worked on various projects," +
            " honing my skills in backend development using Node.js. My expertise lies in developing robust and" +
            " high-performing web applications and APIs.",
    },
    {
        title: "Figma",
        image: Image6,
        summary:
            "With one year of experience using Figma, I have developed a strong proficiency in utilizing this powerful" +
            " design tool to create visually appealing and user-friendly interfaces. Over the past year, I have worked" +
            " on various design projects, honing my skills in UI/UX design, prototyping, and collaboration using Figma." +
            " My expertise lies in leveraging Figma's features to create pixel-perfect designs and streamline the" +
            " design-to-development workflow.",
    },
];

const WhyChooseUs = () => {
    const classes = useStyles();

    return facility && facility.length ? (
        <section className={classes.root} id="service">
            <Container className="why-choose">
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
                                            alt="img"
                                            className="img img-fluid"
                                        />
                                    </Typography>
                                    <Typography component="div" className="content-holder">
                                        <Typography variant="h2" className="service-title" mb={2}>
                                            {item.title}
                                        </Typography>
                                        <Typography className="description">
                                            {item.summary.substring(0, 215)}...
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
