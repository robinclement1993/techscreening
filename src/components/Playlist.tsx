import React from "react";
import { Card } from "@progress/kendo-react-layout";
import {
  Grid,
  GridCellProps,
  GridColumn,
  GridPageChangeEvent,
  GridSortChangeEvent,
} from "@progress/kendo-react-grid";
import { observer } from "mobx-react";
import { createUseStyles } from "react-jss";
import { SongStoreContext } from "./store/SongStore";
import { orderBy, SortDescriptor, State } from "@progress/kendo-data-query";
import { Button } from "@progress/kendo-react-buttons";
import ISong from "./interfaces/ISong";

const useStyles = createUseStyles({
  root: {
    width: "98%",
    minHeight: "83vh",
    marginLeft: "1%",
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  grid: {
    marginLeft: "2.5%",
    marginTop: 24,
    width: "95%",
  },
  deleteButton: {
    "&:hover": {
      transform: `rotate(45deg)`,
      transition: `transform 200ms`,
    },
  },
});

const initialDataState: State = { skip: 0, take: 10 };
const initialSort: Array<SortDescriptor> = [{ field: "id", dir: "asc" }];

const Playlist = observer((): JSX.Element => {
  const classes = useStyles();
  const store = React.useContext(SongStoreContext);
  const [sort, setSort] = React.useState(initialSort);
  const [page, setPage] = React.useState<State>(initialDataState);

  const handlePageChange = (event: GridPageChangeEvent) => {
    setPage(event.page);
  };

  return (
    <Card className={classes.root}>
      <Grid
        className={classes.grid}
        resizable={true}
        data={orderBy(
          store.playlist.slice(page.skip, (page.take ?? 0) + (page.skip ?? 0)),
          sort
        )}
        skip={page.skip}
        take={page.take}
        total={store.playlist.length}
        onPageChange={handlePageChange}
        pageable={true}
        pageSize={10}
        sortable={true}
        sort={sort}
        onSortChange={(e: GridSortChangeEvent) => {
          setSort(e.sort);
        }}
        scrollable={"none"}
      >
        <GridColumn field="name" title="Titel" />
        <GridColumn field="artist" title="Artiest" />
        <GridColumn field="album" title="Album" />
        <GridColumn field="year" title="Jaar" />
        <GridColumn
          field="delete"
          title="Verwijderen"
          cell={(params: GridCellProps) => (
            <td>
              <Button
                className={classes.deleteButton}
                look="clear"
                icon="delete"
                onClick={() =>
                  store.deleteSongFromPlaylist(params.dataItem as ISong)
                }
              />
            </td>
          )}
        />
      </Grid>
    </Card>
  );
});

export default Playlist;
