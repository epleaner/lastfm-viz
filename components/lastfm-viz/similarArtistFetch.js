import axios from "axios";
import { APIKey } from "../../secrets.json";

const SimilarArtistFetch = {
  fetchSimilar: async (name, mbid) => {
    const url = "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar";

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
      similarArtists: data?.similarartists.artist
    };
  }
};

export default SimilarArtistFetch;
