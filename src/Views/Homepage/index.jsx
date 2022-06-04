import React from "react";

import StructuredNavbar from "../../Components/StructuredNavbar";
import Trending from "../../Components/Trending";
import OurClients from "../../Components/OurClient/OurClients";
import Footer from "../../Components/Footer";
import InfinitySliderContainer from "../../Components/InfinitySliderContainers";

const Homepage = () => {
  return (
    <>
      <StructuredNavbar />
      <Trending />
      <InfinitySliderContainer />
      <OurClients />
      <Footer />
    </>
  );
};

export default Homepage;
