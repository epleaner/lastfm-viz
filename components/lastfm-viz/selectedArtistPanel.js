import SimilarArtistsList from "./similarArtistsList";
import EmptyPanel from "./emptyPanel";
import ErrorPanel from "./errorPanel";

const SelectedArtistPanel = props => {
  const { data } = props;

  if (!data) {
    return <EmptyPanel />;
  }

  if (data.error) {
    return <ErrorPanel error={data.error} />;
  }

  return (
    <section>
      <SimilarArtistsList artists={data.data} />
    </section>
  );
};

export default SelectedArtistPanel;
