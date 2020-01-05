import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import { APIKey } from "../../secrets.json";
import ArtistList from "./artistList";

const fetchUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=pleanut&api_key=${APIKey}&format=json`;

const fetcher = url => {
  return fetch(url).then(r => r.json());
};

const LastFMPage = () => {
  const { data, error } = useSWR(fetchUrl, fetcher);

  if (!data) return <span>Loading...</span>;
  if (error) return <span>Failed to fetch: ${error}</span>;

  const { weeklyartistchart } = data;

  return <ArtistList artists={weeklyartistchart.artist} />;
};

export default LastFMPage;
