import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import Ibm from "../../Assets/ibm.png";

import "slick-carousel/slick/slick.css";
import "./OurCustomers.css";
import { CARD_DATA } from "../../Data";

const OurCustomers = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  // const [cardStateData, setCardStateData] = useState([]);
  // const [cardKey, setCardKey] = useState([]);

  let slider1 = useRef();
  let slider2 = useRef();
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow border-0 leftArrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <ChevronLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow border-0 rightArrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <ChevronRight />
    </button>
  );

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);
console.log("slider1", slider1)

console.log("slider2", slider2)
let cdata= Object.values(CARD_DATA)
console.log(cdata)
cdata.map((item) => {
  console.log("item",Object.values(item.Card_Inner_Text))
})
  const firstSlide = [
    {
      id: 1,
      title: "HealthCare",
      className: "healthCare",
    },
    {
      id: 2,
      title: "Hospitality",
      className: "hospitality",
    },
    {
      id: 3,
      title: "Government",
      className: "government",
    },
    {
      id: 4,
      title: "Financial Services",
      className: "financial",
    },
    {
      id: 5,
      title: "Retail",
      className: "retail",
    },
    {
      id: 6,
      title: "Test",
      className: "retail",
    },
  ];
  const handleChangeSlide = (currentSlide,nextSlide) => {

  }
  let ashu;
  return (
    <div className="firstDiv">
      <h3 className="headerHeading">What our customers are saying</h3>
      <div className="container-fluid containerClass">
        <Slider
          className="sliderStyle m-5"
          asNavFor={nav2}
          infinite={true}
          ref={(slider) => (slider1 = slider)}
          slidesToShow={5}
          slidesToScroll={1}
          currentslide={1}
          centerMode={ashu = true}
          afterChange={handleChangeSlide}
          prevArrow={<SlickArrowLeft />}
          nextArrow={<SlickArrowRight />}
        >
          {cdata.map((item, i) => {
            return (
              <div key={i}>
                <h3 className="retail" >{item.label}</h3>
              </div>
            );
          })}
        </Slider>
        { ashu  ? <p>adsfdfjf</p>:"dsdffthisis"}
        <div className="styleSecondSlide ">
          <Slider
            className={"center"}
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            // centerMode={true}
            slidesToScroll={1}
            // currentslide={1}
            nextArrow={<ChevronRight />}
            prevArrow={<ChevronLeft />}
          >
            <div>
            <div className="row">
              {Object.values(CARD_DATA).map((value, key) => {
                // console.log("value[1]",Object.values(value.Card_Inner_Text))
                return (
                  <>
                    {/* <div className="row"> */}
                      {Object.values(value.Card_Inner_Text).map(
                        (item, i = { key }) => {
                          return (
                            <div key={i} className="col-4 col-md-4 ">
                              <div className="card ">
                                <div className="card-body styleCard govermentCard">
                                  <strong className="card-text">
                                    {item.text}
                                  </strong>
                                  <p className="writer">
                                    <strong>{item.author}</strong>{" "}
                                    {item.authorDesignation}
                                  </p>
                                  <div>
                                    <img src={Ibm} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    {/* </div> */}
                  </>
                );
              })}
              </div>
            </div>
            {/* <div className="row d-flex">
              <div className="col-4 col-md-4 ">
                <div className="card ">
                  <div className="card-body styleCard govermentCard">
                    <strong className="card-text">
                      {" "}
                      government "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                    <div>
                      <img src={Ibm} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-4 ">
                <div className="card ">
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      government "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                    <div>
                      <img src={Ibm} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-4 ">
                <div className="card">
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      government "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                    <div>
                      <img src={Ibm} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row d-flex">
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body styleCard">
                      <strong className="card-text">
                        {" "}
                        Financial "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p className="writer">
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card " style={{ width: "18rem" }}>
                    <div className="card-body styleCard">
                      <strong className="card-text">
                        {" "}
                        Financial "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p className="writer">
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body styleCard">
                      <strong className="card-text">
                        {" "}
                        Financial "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p className="writer">
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
                    <div className="card-body styleCard">
                      <strong className="card-text">
                        {" "}
                        Retail "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p className="writer">
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card " style={{ width: "18rem" }}>
                    <div className="card-body styleCard">
                      <strong className="card-text">
                        {" "}
                        Retail "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p className="writer">
                        <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                        Alberta Urban Mubicipalities Association (AUMA)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body styleCard">
                      <strong className="card-text">
                        {" "}
                        Retail "In our legacy enviornment, if our endpoint
                        solution detacted something, it would take at least half
                        a day for remediation efforts to begin. In contrast, if
                        FortiEDR detacts an issue, the time to response is
                        almost immediate."
                      </strong>
                      <p className="writer">
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
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      testDummy "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      testDummy "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      testDummy "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
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
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      Health care "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      Health care "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      Health care "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
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
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      Hospitality "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card " style={{ width: "18rem" }}>
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      Hospitality "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body styleCard">
                    <strong className="card-text">
                      {" "}
                      Hospitality "In our legacy enviornment, if our endpoint
                      solution detacted something, it would take at least half a
                      day for remediation efforts to begin. In contrast, if
                      FortiEDR detacts an issue, the time to response is almost
                      immediate."
                    </strong>
                    <p className="writer">
                      <strong>-Sahun Guthrie,</strong> Senior Director, IT ,
                      Alberta Urban Mubicipalities Association (AUMA)
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
  // }
};
export default OurCustomers;
