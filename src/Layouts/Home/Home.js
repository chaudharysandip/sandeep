import { makeStyles } from "@mui/styles";
import React, { lazy } from "react";

const Slider = lazy(() => import("Components/Slider"));
const WhyChooseUs = lazy(() => import("Components/Why-choose-us"));
const ServiceBlock = lazy(() => import("Components/Service/1"));
const Introduction = lazy(() => import("Components/Introduction"));
const ServiceBlock2 = lazy(() => import("Components/Service/2"));
const Testimonial = lazy(() => import("Components/Testimonial"));
const ApplyBanner = lazy(() => import("Components/Apply-banner"));
const Contact = lazy(() => import("Components/Contact"));

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        : `linear-gradient(-160deg, #fdfaff, #3a0ca3)`,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Slider />
      <WhyChooseUs />
      <ServiceBlock />
      <Introduction />
      <ServiceBlock2 />
      <Testimonial />
      <ApplyBanner />
      <Contact />
    </main>
  );
};

export default Home;
