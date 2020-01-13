import ArtistList from "./artistList";
import useArtistFetch from "./artistFetch";

const ArtistSearch = props => {
  const { artists, loading, error } = useArtistFetch();
  if (loading) return <span>Loading...</span>;
  if (error) return <span>Failed to fetch: ${error}</span>;
  return <ArtistList artists={artists} {...props} />;
};

export default ArtistSearch;
