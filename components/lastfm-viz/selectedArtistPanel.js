import SimilarArtistsList from "./similarArtistsList";
import EmptyPanel from "./emptyPanel";
import ErrorPanel from "./errorPanel";

const SelectedArtistPanel = props => {
  const { artistFetchedData } = props;

  if (!artistFetchedData) {
    return <EmptyPanel />;
  }

  if (artistFetchedData.error) {
    return <ErrorPanel error={artistFetchedData.error} />;
  }

  return <SimilarArtistsList artists={artistFetchedData.data} />;
};

export default SelectedArtistPanel;
