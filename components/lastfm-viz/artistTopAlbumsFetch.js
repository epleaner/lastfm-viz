import axios from "axios";
import { APIKey } from "../../secrets.json";

const ArtistTopAlbumsFetch = {
  fetchTopAlbums: async (name, mbid) => {
    const url = "https://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums";

    const { data, error } = await axios.get(url, {
      params: {
        mbid: mbid,
        name: name,
        autocorrect: 1,
        api_key: APIKey,
        format: "json"
      }
    });

    if (error || data.error) {
      return {
        error: error || {
          code: data.error,
          message: data?.message
        }
      };
    }

    return {
      topAlbums: data?.topalbums.album
    };
  }
};

export default ArtistTopAlbumsFetch;
