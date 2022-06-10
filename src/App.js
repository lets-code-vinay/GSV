import React from "react";
import Homepage from "./Views/Homepage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/More/SideBarTab/About";
import WhyChooseUs from "./Components/More/SideBarTab/WhyChoose";
import Industries from "./Components/More/SideBarTab/Industries/Index";
import OurPresence from "./Components/Presence";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/whyChoose" element={<WhyChooseUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/ourpresence" element={<OurPresence />} />
          <Route path="/ourCustomer" element={<About />} />
          <Route path="/blogs" element={<About />} />
          <Route path="/career" element={<About />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
