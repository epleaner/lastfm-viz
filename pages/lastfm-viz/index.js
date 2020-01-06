import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import ArtistList from "./artistList";
import withArtistFetch from "../../components/lastfm-viz/artistFetch";

const LastFMPage = props => {
  const { artists, loading, error } = props;

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Failed to fetch: ${error}</span>;

  return <ArtistList artists={artists} />;
};

export default withArtistFetch(LastFMPage);
