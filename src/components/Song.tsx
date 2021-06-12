import React from "react";
import ISong from "./interfaces/ISong";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardActions,
  CardImage,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { createUseStyles } from "react-jss";
import { observer } from "mobx-react";
import logo from "../images/logo.png";
import { SongStoreContext } from "./store/SongStore";

const black = "#000000";
const yellow = "#FFE000";
const white = "#FFFFFF";

const useStyles = createUseStyles({
  container: {
    width: 300,
    boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
    margin: 15,
  },
  title: {
    textAlign: "center",
  },
  headerTitle: {
    composes: ["$title"],
    marginBottom: 4,
  },
  cover: {
    height: 250,
    maxWidth: "100%",
    margin: 10,
    backgroundColor: black,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  deleteButton: {
    backgroundColor: white,
    color: black,
    "&:hover": {
      backgroundColor: black,
      color: white,
    },
  },
  addButton: {
    backgroundColor: yellow,
    color: black,
    "&:hover": {
      backgroundColor: black,
      color: yellow,
    },
  },
});

interface ISongProps {
  key: number;
  song: ISong;
}

const Song = observer((songProps: ISongProps): JSX.Element => {
  const classes = useStyles();
  const store = React.useContext(SongStoreContext);
  const isInPlaylist = store.isInPlayList(songProps.song);

  const handlePlaylistButtonClick = () => {
    isInPlaylist
      ? store.deleteSongFromPlaylist(songProps.song)
      : store.addSongToPlaylist(songProps.song);
  };

  return (
    <Card className={classes.container}>
      <CardTitle className={classes.headerTitle}>
        {songProps.song.name}
      </CardTitle>
      <CardSubtitle
        className={classes.title}
      >{`${songProps.song.artist} - ${songProps.song.year}`}</CardSubtitle>
      <CardImage className={classes.cover} src={logo} />
      <CardActions className={classes.actions}>
        <Button
          className={isInPlaylist ? classes.deleteButton : classes.addButton}
          icon={isInPlaylist ? "delete" : "add"}
          onClick={handlePlaylistButtonClick}
        >
          {isInPlaylist ? "Verwijderen uit playlist" : "Toevoegen aan playlist"}
        </Button>
      </CardActions>
    </Card>
  );
});

export default Song;
