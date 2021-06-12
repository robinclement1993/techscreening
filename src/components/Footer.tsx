import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    composes: ["k-bg-dark", "k-color-light", "k-h4"],
    backgroundColor: "#232323",
    textAlign: "center",
    verticalAlign: "middle",
    height: "60px",
    bottom: 0,
    width: "100%",
    lineHeight: "60px",
  },
});

const Footer = (): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.footer}> &copy;&nbsp;Robin Clement 2021</div>;
};

export default Footer;
