import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import { APIKey } from "../../secrets.json";
import ArtistFetch from "./artistFetch";

const fetchUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&mbid=&api_key=${APIKey}&format=json`;

const fetcher = url => {
  return fetch(url).then(r => r.json());
};

const insertMbidIntoFetchUrl = mbid =>
  fetchUrl.replace("&mbid=&", `&mbid=${mbid}&`);

const withSimilarArtistFetch = Page => {
  return () => {
    const fetchResponse = ArtistFetch.getTopArtists();
    const { artists, loading, error } = fetchResponse;

    if (loading || error) return <Page {...fetchResponse} />;

    const topThreeArtists = artists.slice(0, 3);

    for (let { mbid } of topThreeArtists) {
      const urlWithMbid = insertMbidIntoFetchUrl(mbid);
      const { data, error } = useSWR(urlWithMbid, fetcher);
      console.log(data, error);
    }

    return <Page similarArtists={[1, 2, 3]} {...fetchResponse} />;
  };
};

export default withSimilarArtistFetch;
