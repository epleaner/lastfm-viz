import SimilarArtistsList from "./similarArtistsList";
import AsyncPanel from "./asyncPanel";

const SimilarArtistsPanel = props => {
  const { selectedArtist } = props;

  return (
    <AsyncPanel
      {...props}
      render={(data, otherProps) => (
        <article>
          <h1>Artists similar to {selectedArtist}</h1>
          <SimilarArtistsList artists={data} {...otherProps} />
          <style jsx>{`
            display: grid;
            grid-template-rows: 40px 1fr;
          `}</style>
        </article>
      )}
    />
  );
};

export default SimilarArtistsPanel;
