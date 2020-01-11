import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import { APIKey } from "../../secrets.json";

const useArtistFetch = () => {
  const fetchUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=pleanut&api_key=${APIKey}&format=json`;
  const fetcher = url => {
    return fetch(url).then(r => r.json());
  };
  const { data, error } = useSWR(fetchUrl, fetcher);

  const fetched = {
    loading: !data,
    error,
    artists: data?.weeklyartistchart.artist
  };

  return fetched;
};

export default useArtistFetch;
