import { makeAutoObservable } from "mobx";
import React from "react";
import ISong from "../interfaces/ISong";
import SongsData from "../../data/songs";

export class SongStore {
  songsOverview: ISong[] = SongsData;

  playlist: ISong[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  deleteSongFromPlaylist(song: ISong): void {
    const index = this.playlist.indexOf(song);
    this.playlist.splice(index, 1);
  }

  addSongToPlaylist(song: ISong): void {
    this.playlist.push(song);
  }

  isInPlayList(song: ISong): boolean {
    return this.playlist.indexOf(song) >= 0;
  }
}

export const SongStoreContext = React.createContext(new SongStore());
