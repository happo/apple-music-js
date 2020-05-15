import mockDB from './mockDB';

function findTracksByAlbumName(name) {
  // [{"name":"01 Cycle","artist":"Beck","album":"Morning Phase","track":1,"url":"files\/music\/Beck\/Morning Phase\/01 Cycle.mp3","artwork":"files\/music\/Beck\/Morning Phase\/Artwork.png"}];
  for (const artist of mockDB) {
    for (const album of artist.albums || []) {
      if (album.album === name) {
        return album.tracks.map(track => ({
          name: track.name,
          artist: artist.artist,
          album: album.album,
          track: track.track,
          url: track.url,
          artwork: album.artwork,
        }));
      }
    }
  }
  return [];
}
class ApiClass {
  fetchArtists() {
    return Promise.resolve(mockDB.map(({ artist }) => ({ artist })));
  }

  fetchArtist(artistName) {
    // [{"album":"Morning Phase","artist":"Beck","artwork":"files\/music\/Beck\/Morning Phase\/Artwork.png"}]
    const artist = mockDB.find(a => a.artist === artistName);
    const result = artist.albums.map(album => ({
      album: album.album,
      artist: artist.artist,
      artwork: album.artwork,
    }));
    return Promise.resolve(result);
  }

  fetchAlbums() {
    const albums = [];
    mockDB.forEach(artist => {
      (artist.albums || []).forEach(album => {
        albums.push({
          album: album.album,
          artist: artist.artist,
          artwork: album.artwork,
        });
      });
    });
    return Promise.resolve(albums);
  }

  fetchAlbum({ album }) {
    // [{"name":"01 Cycle","artist":"Beck","album":"Morning Phase","track":1,"url":"files\/music\/Beck\/Morning Phase\/01 Cycle.mp3","artwork":"files\/music\/Beck\/Morning Phase\/Artwork.png"}];
    return Promise.resolve(findTracksByAlbumName(album));
  }
}

const Api = new ApiClass();
export default Api;
