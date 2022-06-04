import React from "react";
import OurCustomers from "../../Components/Our_Customers/OurCustomers";
import OurClients from "../../Components/OurClient/OurClients";
import StructuredNavbar from "../../Components/StructuredNavbar";
import Trending from "../../Components/Trending";


const Homepage = () => {
  return (
    <>
      {/* <StructuredNavbar /> */}
      <OurCustomers/>
      {/* <Trending /> */}
      <OurClients />
    </>
  );
};

export default Homepage;
