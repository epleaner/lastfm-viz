import SimilarArtistsList from "./similarArtistsList";
import AsyncPanel from "./asyncPanel";

const SimilarArtistsPanel = props => {
  const { selectedArtist } = props;

  return (
    <AsyncPanel
      {...props}
      header={<h1>Artists similar to {selectedArtist}</h1>}
      body={(data, otherProps) => (
        <SimilarArtistsList artists={data} {...otherProps} />
      )}
    />
  );
};

export default SimilarArtistsPanel;
