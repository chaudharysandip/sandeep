import { Container } from "@mui/material";
import {makeStyles} from "@mui/styles";
import React from "react";
import { Dna } from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .center-div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container className="loader" sx={{ textAlign: "center" }}>
        <Dna
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
      </Container>
    </section>
  );
};

export default Loader;
