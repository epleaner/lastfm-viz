import AlbumsList from "./albumsList";
import EmptyPanel from "./emptyPanel";
import ErrorPanel from "./errorPanel";

const AlbumsPanel = props => {
  const { data } = props;

  if (!data) {
    return <EmptyPanel />;
  }

  if (data.error) {
    return <ErrorPanel error={data.error} />;
  }

  const sortedData = data.data.sort(
    ({ playcountA }, { playcountB }) => playcountB >= playcountA
  );

  return (
    <section>
      <AlbumsList albums={sortedData} {...props} />
    </section>
  );
};

export default AlbumsPanel;
