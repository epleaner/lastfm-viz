import axios from "axios";
import { APIKey } from "../secrets.json";

const createFetcher = (url, group, subgroup) => async (name, mbid) => {
  const { data, error } = await axios.get(url, {
    params: {
      artist: name,
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
    data: data[group][subgroup]
  };
};

export const fetchTopAlbums = createFetcher(
  "https://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums",
  "topalbums",
  "album"
);

export const fetchSimilarArtists = createFetcher(
  "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar",
  "similarartists",
  "artist"
);
