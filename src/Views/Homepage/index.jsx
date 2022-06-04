import React from "react";
import Footer from "../../Components/Footer";
import OurClients from "../../Components/OurClient/OurClients";
import StructuredNavbar from "../../Components/StructuredNavbar";
import Trending from "../../Components/Trending";


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
