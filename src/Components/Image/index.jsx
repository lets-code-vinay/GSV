import React from "react";
import { string } from "prop-types";

const Image = ({ source = "", text = "" }) => {
  return (
    <>
      <img src={source} alt={text} />
    </>
  );
};

/**
 * Props validation
 */
Image.propTypes = {
  alt: string,
  source: string,
};

/**
 * Default Props
 */
 Image.propTypes = {
    alt: '',
    source: '',
  };
  

  export default Image;