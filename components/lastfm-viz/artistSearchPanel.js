import ArtistList from "./artistList";
import useArtistFetch from "./artistFetch";

const ArtistSearchPanel = props => {
  const { artists, loading, error } = useArtistFetch();
  let content;
  if (loading) content = <span>Loading...</span>;
  else if (error) content = <span>Failed to fetch: ${error}</span>;
  else content = <ArtistList artists={artists} {...props} />;

  return <section>{content}</section>;
};

export default ArtistSearchPanel;
