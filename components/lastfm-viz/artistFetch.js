import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import { APIKey } from "../../secrets.json";

const fetchUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=pleanut&api_key=${APIKey}&format=json`;

const fetcher = url => {
  return fetch(url).then(r => r.json());
};

const withArtistFetch = Page => {
  return () => {
    const { data, error } = useSWR(fetchUrl, fetcher);

    const pageProps = {
      loading: !data,
      error,
      artists: data?.weeklyartistchart.artist
    };

    return <Page {...pageProps} />;
  };
};

export default withArtistFetch;
