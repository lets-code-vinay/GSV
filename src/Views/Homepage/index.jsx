import React from "react";

import StructuredNavbar from "../../Components/StructuredNavbar";
import MainSlider from "../../Components/MainSlider";
import Trending from "../../Components/Trending";
import Insight from "../../Components/Insight";
import OurClients from "../../Components/OurClient/OurClients";
import InfinitySliderContainer from "../../Components/InfinitySliderContainers";
import OurPresence from "../../Components/Presence";
import Footer from "../../Components/Footer";

const Homepage = () => {
  return (
    <>
      <StructuredNavbar />
      <MainSlider />
      <Trending />
      <Insight />
      <InfinitySliderContainer />
      <OurPresence />
      <OurClients />
      <Footer />
    </>
  );
};

export default Homepage;
