import { SongStore } from "../SongStore";

describe("SongStore", () => {
  it("Adds requested song to Playlist", () => {
    const store = new SongStore();
    expect(store.playlist.length).toBe(0);
    const songFromSongsOverview = store.songsOverview[0];
    store.addSongToPlaylist(songFromSongsOverview);
    expect(store.playlist.length).toBe(1);
    const songFromPlaylist = store.playlist[0];
    expect(songFromPlaylist.name).toBe(songFromSongsOverview.name);
  });
});

describe("SongStore", () => {
  it("Deletes requested song from Playlist", () => {
    const store = new SongStore();
    const songFromSongsOverview = store.songsOverview[0];
    store.addSongToPlaylist(songFromSongsOverview);
    expect(store.playlist.length).toBe(1);
    store.deleteSongFromPlaylist(songFromSongsOverview);
    expect(store.playlist.length).toBe(0);
  });
});

describe("SongStore", () => {
  it("Shows if song is in Playlist", () => {
    const store = new SongStore();
    const songFromSongsOverview = store.songsOverview[0];
    expect(store.isInPlayList(songFromSongsOverview)).toBeFalsy;
    store.addSongToPlaylist(songFromSongsOverview);
    expect(store.isInPlayList(songFromSongsOverview)).toBeTruthy;
  });
});
