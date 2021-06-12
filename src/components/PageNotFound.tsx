import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    textAlign: "center",
  },
});

const PageNotFound = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Pagina niet gevonden.</h1>
    </div>
  );
};

export default PageNotFound;
