import axios from "axios";
import { APIKey } from "../secrets.json";

const createFetcher = ({ url, group, subgroup, resource }) => async name => {
  const defaultParams = {
    autocorrect: 1,
    api_key: APIKey,
    format: "json"
  };

  let params;

  switch (resource) {
    case "artist":
      params = {
        artist: name,
        ...defaultParams
      };
      break;
    case "user":
      params = {
        user: name,
        ...defaultParams
      };
      break;
  }

  const { data, error } = await axios.get(url, { params });

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

export const fetchTopAlbums = createFetcher({
  url: "https://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums",
  group: "topalbums",
  subgroup: "album",
  resource: "artist"
});

export const fetchSimilarArtists = createFetcher({
  url: "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar",
  group: "similarartists",
  subgroup: "artist",
  resource: "artist"
});

export const fetchUsersWeeklyCharts = createFetcher({
  url: "https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart",
  group: "weeklyartistchart",
  subgroup: "artist",
  resource: "user"
});
