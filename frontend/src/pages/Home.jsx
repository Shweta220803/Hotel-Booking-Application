import React from "react";
import Hero from "../components/Hero";
import FeatureDestination from "../components/FeatureDestination";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureDestination />
      <ExclusiveOffer />
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
