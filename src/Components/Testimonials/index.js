import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { IoPeopleCircleOutline } from 'react-icons/io5'
import {
    Box,
    makeStyles,
    Typography,
} from "@material-ui/core";
import "./style.css";
import { TESTIMONIALS_OF } from "../../Configs/Testimonials";

const Testimonials = () => {
    const classes = useStyles();

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const ref = useRef();

    let slider1 = useRef();
    let slider2 = useRef();

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, []);


    return (
        <div className={`${classes.testimanials} testimanials`}>
            <Box className={`${classes.testimonialLogo} testimonialLogo`}>
                <IoPeopleCircleOutline className={`${classes.flashIcon} flashIcon`} />
                <Typography
                    variant="h4"
                    className={`${classes.testimonialTitle} testimonialTitle`}
                >
                    What our customers are saying
                </Typography>
            </Box>
            <hr className={`${classes.hr} hr`} />

            <div className="container-fluid containerClass">
                <Slider
                    className="sliderPadding"
                    asNavFor={nav2}
                    infinite={true}
                    // ref={(slider) => (slider1 = slider)}
                    slidesToShow={5}
                    slidesToScroll={1}
                    nextArrow={<ChevronRight className="rightArrow" />}
                    prevArrow={<ChevronLeft className="leftArrow" />}
                >
                    {
                        TESTIMONIALS_OF.map((item) => {
                            return <div>
                                <h3>{item.title}</h3>
                            </div>
                        })
                    }
                </Slider>
                <div className="styleSecondSlide">
                    <Slider
                        className="secondSlideStyle"
                        asNavFor={nav1}
                        // ref={(slider) => (slider2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        slidesToScroll={3}
                        nextArrow={<div className="blockDisplay"><ChevronRight /></div>}
                        prevArrow={<ChevronLeft style={{ display: "none" }} />}
                    >
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <Typography variant="body1" className="card-text">222222222
                                        "Fortinate's solutions have allowed us to be able to put our
                                        patients first as always and focus on satisfying their needs."
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>-Mubaraka Ibrahim,</strong> IT Director MOHAPMministry
                                        of Health and Prevention
                                    </Typography>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <Typography className="card-text">
                                        "In our legacy enviornment, if our endpoint solution detacted
                                        something, it would take at least half a day for remediation
                                        efforts to begin. In contrast, if FortiEDR detacts an issue,
                                        the time to response is almost immediate."
                                    </Typography>
                                    <p>
                                        <Typography>-Sahun Guthrie,</Typography> Senior Director, IT , Alberta
                                        Urban Mubicipalities Association (AUMA)
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <Typography className="card-text">
                                        "In our legacy enviornment, if our endpoint solution detacted
                                        something, it would take at least half a day for remediation
                                        efforts to begin. In contrast, if FortiEDR detacts an issue,
                                        the time to response is almost immediate."
                                    </Typography>
                                    <p>
                                        <Typography>-Sahun Guthrie,</Typography> Senior Director, IT , Alberta
                                        Urban Mubicipalities Association (AUMA)
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <Typography className="card-text">
                                        "In our legacy enviornment, if our endpoint solution detacted
                                        something, it would take at least half a day for remediation
                                        efforts to begin. In contrast, if FortiEDR detacts an issue,
                                        the time to response is almost immediate."
                                    </Typography>
                                    <p>
                                        <Typography>-Sahun Guthrie,</Typography> Senior Director, IT , Alberta
                                        Urban Mubicipalities Association (AUMA)
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <Typography className="card-text">
                                        "In our legacy enviornment, if our endpoint solution detacted
                                        something, it would take at least half a day for remediation
                                        efforts to begin. In contrast, if FortiEDR detacts an issue,
                                        the time to response is almost immediate."
                                    </Typography>
                                    <p>
                                        <Typography>-Sahun Guthrie,</Typography> Senior Director, IT , Alberta
                                        Urban Mubicipalities Association (AUMA)
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <strong className="card-text">
                                        "In our legacy enviornment, if our endpoint solution detacted
                                        something, it would take at least half a day for remediation
                                        efforts to begin. In contrast, if FortiEDR detacts an issue,
                                        the time to response is almost immediate."
                                    </strong>
                                    <p>
                                        <strong>-Sahun Guthrie,</strong> Senior Director, IT , Alberta
                                        Urban Mubicipalities Association (AUMA)
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <strong className="card-text">
                                        "In our legacy enviornment, if our endpoint solution detacted
                                        something, it would take at least half a day for remediation
                                        efforts to begin. In contrast, if FortiEDR detacts an issue,
                                        the time to response is almost immediate."
                                    </strong>
                                    <p>
                                        <strong>-Sahun Guthrie,</strong> Senior Director, IT , Alberta
                                        Urban Mubicipalities Association (AUMA)
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <strong className="card-text">
                                        "In our legacy enviornment, if our endpoint solution detacted
                                        something, it would take at least half a day for remediation
                                        efforts to begin. In contrast, if FortiEDR detacts an issue,
                                        the time to response is almost immediate."
                                    </strong>
                                    <p>
                                        <strong>-Sahun Guthrie,</strong> Senior Director, IT , Alberta
                                        Urban Mubicipalities Association (AUMA)
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <strong className="card-text">
                                        "In our legacy enviornment, if our endpoint solution detacted
                                        something, it would take at least half a day for remediation
                                        efforts to begin. In contrast, if FortiEDR detacts an issue,
                                        the time to response is almost immediate."
                                    </strong>
                                    <p>
                                        <strong>-Sahun Guthrie,</strong> Senior Director, IT , Alberta
                                        Urban Mubicipalities Association (AUMA)
                                    </p>

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
export default Testimonials;


const useStyles = makeStyles((theme) => ({
    testimanials: {
        padding: "2% 4%",
    },
    testimonialLogo: {
        display: "flex",
        flexDirection: "row",
        margin: "4% 0 1%  11%",
        fontWeight: "800",
        color: "#0d274d",
    },
    flashIcon: {
        fontSize: "60px",
        margin: "0 10px 0 0",
        color: "#0d274d",
    },
    testimonialTitle: {
        marginTop: '0.5rem',
    },
    hr: {
        margin: "0 0 3%  0%",

    }
}))

