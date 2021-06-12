import React, { useState } from "react";
import { Card } from "@progress/kendo-react-layout";
import { createUseStyles } from "react-jss";
import Song from "./Song";
import { SongStoreContext } from "./store/SongStore";
import { observer } from "mobx-react";
import { Input, InputChangeEvent } from "@progress/kendo-react-inputs";
import ISong from "./interfaces/ISong";

const useStyles = createUseStyles({
  root: {
    width: "98%",
    minHeight: "83vh",
    marginLeft: "1%",
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "center",
  },
});

const SongContainer = observer((): JSX.Element => {
  const classes = useStyles();
  const store = React.useContext(SongStoreContext);
  if (!store) {
    throw Error("Store shouldn't be null");
  }

  const [filteredSongs, setFilteredSongs] = useState<ISong[]>(
    store.songsOverview
  );

  const handleSearchSongs = (event: InputChangeEvent) => {
    const searchValue = event.target.value as string;
    setFilteredSongs(
      searchValue.length < 1
        ? store.songsOverview
        : store.songsOverview.filter((s) =>
            s.artist.toLowerCase().includes(searchValue.toLowerCase())
          )
    );
  };

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.searchWrapper}>
          <Input placeholder={"Zoek op artiest"} onChange={handleSearchSongs} />
        </div>
        <div className={classes.wrapper}>
          {filteredSongs.map((song) => (
            <Song key={song.id} song={song} />
          ))}
        </div>
      </Card>
    </>
  );
});

export default SongContainer;
