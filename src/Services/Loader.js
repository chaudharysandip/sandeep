import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Hearts } from "react-loader-spinner";
import Image from "Assets/Images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    animation: `2.5s cubic-bezier(.25, 1, .30, 1) $wipe-cinematic-out`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #000, #240046)",
    "& .center-div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& img": {
      maxHeight: "100px",
      animation: `$scale 1.5s linear infinite`,
    },
  },
  "@keyframes wipe-cinematic-out": {
    "0%": {
      clipPath: "inset(0 0 0 0)",
    },
    "70%": {
      clipPath: "inset(10% 0 10% 0)",
    },
    "100%": {
      clipPath: "inset(100% 0 100% 0)",
    },
  },
  "@keyframes scale": {
    "0%": {
      transform: "scale(1.1)",
    },
    "30%": {
      transform: "scale(0.5)",
    },
    "50%": {
      transform: "scale(0.7)",
    },
    "70%": {
      transform: "scale(0.8)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container className="loader" sx={{ textAlign: "center" }}>
        <Hearts
          height="80"
          width="80"
          color="#fff"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass="center-div"
          visible={true}
        />
        <img src={Image} alt="img" />
      </Container>
    </section>
  );
};

export default Loader;
