import React from "react";

import StructuredNavbar from "../../Components/StructuredNavbar";
import Trending from "../../Components/Trending";
import OurClients from "../../Components/OurClient/OurClients";
import Footer from "../../Components/Footer";
import InfinitySliderContainer from "../../Components/InfinitySliderContainers";
import Technologies from "../../Components/Technologies";

const Homepage = () => {
  return (
    <>
      <StructuredNavbar />
      <Trending />
      <InfinitySliderContainer />
      <Technologies />
      <OurClients />
      <Footer />
    </>
  );
};

export default Homepage;
