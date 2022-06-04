import React from "react";

import StructuredNavbar from "../../Components/StructuredNavbar";
import Trending from "../../Components/Trending";
import OurClients from "../../Components/OurClient/OurClients";
import Footer from "../../Components/Footer";

const Homepage = () => {
  return (
    <>
      <StructuredNavbar />
      <Trending />
      <OurClients />
      <Footer />
    </>
  );
};

export default Homepage;
