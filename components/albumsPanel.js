import AlbumsList from "./albumsList";
import AsyncPanel from "./asyncPanel";

const AlbumsPanel = props => {
  const { selectedArtist } = props;

  const sortByPlaycount = (
    { playcount: playcountA },
    { playcount: playcountB }
  ) => playcountB >= playcountA;

  return (
    <AsyncPanel
      {...props}
      render={(data, otherProps) => {
        const sortedData = data.sort(sortByPlaycount);
        return (
          <article>
            <h1>Albums of {selectedArtist}</h1>
            <AlbumsList albums={sortedData} {...otherProps} />;
            <style jsx>{`
              display: grid;
              grid-template-rows: 40px 1fr;
            `}</style>
          </article>
        );
      }}
    />
  );
};

export default AlbumsPanel;
