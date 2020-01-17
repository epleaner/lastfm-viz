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
      header={<h1>Albums of {selectedArtist}</h1>}
      body={(data, otherProps) => {
        const sortedData = data.sort(sortByPlaycount);
        return <AlbumsList albums={sortedData} {...otherProps} />;
      }}
    />
  );
};

export default AlbumsPanel;
