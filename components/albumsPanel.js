import AlbumsList from "./albumsList";
import AsyncPanel from "./asyncPanel";

const AlbumsPanel = props => {
  const sortByPlaycount = (
    { playcount: playcountA },
    { playcount: playcountB }
  ) => playcountB >= playcountA;

  return (
    <AsyncPanel
      {...props}
      render={(data, otherProps) => {
        const sortedData = data.sort(sortByPlaycount);
        return <AlbumsList albums={sortedData} {...otherProps} />;
      }}
    />
  );
};

export default AlbumsPanel;
