import React from "react";
import { string } from "prop-types";

const Image = ({ source = "", text = "", imageClass = "" }) => {
  return (
    <>
      <img src={source} alt={text} className={imageClass} />
    </>
  );
};

/**
 * Props validation
 */
Image.propTypes = {
  alt: string,
  imageClass: string,
  source: string,
};

/**
 * Default Props
 */
Image.propTypes = {
  alt: "",
  imageClass: "",
  source: "",
};

export default Image;
