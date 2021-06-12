import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SongContainer from "./components/SongContainer";
import "@progress/kendo-theme-material/dist/all.css";
import { createUseStyles } from "react-jss";
import Playlist from "./components/Playlist";
import PageNotFound from "./components/PageNotFound";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#FFE000",
  },
});

function App(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Routes>
        <Route path="/" element={<SongContainer />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
