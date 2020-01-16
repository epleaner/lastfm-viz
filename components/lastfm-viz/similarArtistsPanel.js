import SimilarArtistsList from "./similarArtistsList";
import AsyncPanel from "./asyncPanel";

const SimilarArtistsPanel = props => {
  return (
    <AsyncPanel
      {...props}
      render={(data, otherProps) => (
        <SimilarArtistsList artists={data} {...otherProps} />
      )}
    />
  );
};

export default SimilarArtistsPanel;
