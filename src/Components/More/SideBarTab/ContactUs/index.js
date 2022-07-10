import React from "react";
import { string } from "prop-types";

import { Box, Button, Grid, makeStyles, TextareaAutosize, TextField } from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";

import "./styles.css";


const ContactUs = ({ title = "", subtitle = "", image = "", alt = "", }) => {
  const classes = useStyles()

  return (
    <Grid container className="displayFlex">
      <Grid item xs={12} sm={12} md={6} lg={7}>
        <h1 className={`${classes.heading} heading my-2`}
        >{title}</h1>

        {subtitle && (
          <p className="subtitle">{subtitle}</p>
        )}

        <Box className={`${classes.formContainer} formContainer `}>
          <TextField
            id="fullName"
            label="Full Name"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="subject"
            label="Subject"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            style={{ textAlign: 'left' }}
            hintText="Message Field"
            margin="normal"
            floatingLabelText="MultiLine and FloatingLabel"
            variant="outlined"
            fullWidth
            id="message"
            label="Message"
            type="text"
            multiline
            rows={7}
          />
          <Button variant="contained" className={`${classes.buttonClass} buttonClass`}
            endIcon={<SendIcon
              className={`${classes.sendButton} sendButton`}
            />
            }>
            Send
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={5}>
        <img
          className={`${classes.contactImage} contactImage`}
          src={image}
          alt={alt}
          width="100%"
        />
      </Grid>
    </Grid>
  );
};

/**
 * Props validation
 */
ContactUs.propTypes = {
  title: string,
  subtitle: string,
  image: string,
  alt: string
}

/**
 * Default Props
 */
ContactUs.defaultProps = {
  title: "",
  subtitle: "",
  image: "",
  alt: "",
}
export default ContactUs;


const useStyles = makeStyles(() => ({
  contactImage: {
    'webkit- transform': 'scaleX(- 1)',
    transform: 'scaleX(-1)'
  },

  heading: {
    width: '90%',
    marginBottom: '5%',
  },

  subtitle: {
    width: '90%',
    marginBottom: '5%',
  },

  formContainer: {
    width: '90%'
  },

  buttonClass: {
    backgroundColor: '#002446 !important',
    color: '#dfdfdf !important',
    '&:hover': {
      backgroundColor: '#dfdfdf !important',
      color: '#002446 !important'
    },
    sendButton: {
      color: '#dfdfdf',
    }
  },

}))
