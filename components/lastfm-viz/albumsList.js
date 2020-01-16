import Album from "./album";
import List from "./list";

const AlbumsList = props => {
  const { albums } = props;

  return (
    <List>
      {albums.map((album, key) => (
        <Album {...album} key={key} albumKey={key} />
      ))}
    </List>
  );
};

export default AlbumsList;
