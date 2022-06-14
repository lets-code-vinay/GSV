import React from "react";

import StructuredNavbar from "../../Components/StructuredNavbar";
import Trending from "../../Components/Trending";
import OurClients from "../../Components/OurClient/OurClients";
import InfinitySliderContainer from "../../Components/InfinitySliderContainers";
import Technologies from "../../Components/Technologies";
import MainSlider from "../../Components/MainSlider";
import Insight from "../../Components/Insight";
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
      <Technologies />
      <OurPresence />
      <OurClients />
      <Footer />
    </>
  );
};

export default Homepage;
