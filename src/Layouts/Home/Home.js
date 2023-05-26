import React, { lazy } from "react";

const Slider = lazy(() => import("Components/Slider"));
const WhyChooseUs = lazy(() => import("Components/Why-choose-us"));
const ServiceBlock = lazy(() => import("Components/Service/1"));
const Introduction = lazy(() => import("Components/Introduction"));
const ServiceBlock2 = lazy(() => import("Components/Service/2"));
const Testimonial = lazy(() => import("Components/Testimonial"));
const ApplyBanner = lazy(() => import("Components/Apply-banner"));
const Contact = lazy(() => import("Components/Contact"));

const Home = () => {
  return (
    <main>
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
