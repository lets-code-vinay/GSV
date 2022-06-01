import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";

import "slick-carousel/slick/slick.css";
import "./OurCustomers.css";

const OurCustomers = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  
  let slider1 = useRef();
  let slider2 = useRef();

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  const firstSlide = [
    {
      id: 1,
      title: "HealthCare",
    },
    {
      id: 2,
      title: "Hospitality",
    },
    {
      id: 3,
      title: "Government",
    },
    {
      id: 4,
      title: "Financial Services",
    },
    {
      id: 5,
      title: "Retail",
    },
    {
      id: 6,
      title: "Test",
    },
  ];
  return (
    <div className="firstDiv">
      <div className="container-fluid containerClass">
        <Slider
          asNavFor={nav2}
          infinite={true}
          ref={(slider) => (slider1 = slider)}
          slidesToShow={5}
          slidesToScroll={1}
          nextArrow={<ChevronRight />}
          prevArrow={<ChevronLeft />}
        >
          {/* {
            firstSlide.map((item) => {
              return <div>
              <h3>{item.title}</h3>
            </div>
            })
          } */}
          <div>
            <h3 className="styleTopSlidHead">HealthCare</h3>
          </div>
          <div>
            <h3 className="hospitality">Hospitality</h3>
          </div>
          <div>
            <h3 className="government">Government</h3>
          </div>
          <div>
            <h3 className="financial">Financial Services</h3>
          </div>
          <div>
            <h3 className="retail">Retail</h3>
          </div>
          <div>
            <h3 className="retail">test</h3>
          </div>
        </Slider>
        <div className="styleSecondSlide">
          <Slider
            className={"center"}
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            centerMode={true}
            slidesToScroll={3}
            nextArrow={<ChevronRight />}
            prevArrow={<ChevronLeft  />}
          >
            <div className="row d-flex">
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      government "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      government "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      government "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row d-flex">
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <strong className="card-text">
                        {" "}
                        Financial "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p>
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card " style={{ width: "18rem" }}>
                    <div className="card-body">
                      <strong className="card-text">
                        {" "}
                        Financial "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p>
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <strong className="card-text">
                        {" "}
                        Financial "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p>
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row d-flex">
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <strong className="card-text">
                        {" "}
                        Retail "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p>
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card " style={{ width: "18rem" }}>
                    <div className="card-body">
                      <strong className="card-text">
                        {" "}
                        Retail "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p>
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <strong className="card-text">
                        {" "}
                        Retail "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p>
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      testDummy "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      testDummy "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      testDummy "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      Health care "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      Health care "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      Health care "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      Hospitality "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      Hospitality "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="card-text">
                      {" "}
                      Hospitality "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p>
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
  // }
};
export default OurCustomers;
