import Album from "./album";

const AlbumsList = props => {
  const { albums } = props;

  return (
    <ul>
      {albums.map((album, key) => (
        <Album {...album} key={key} albumKey={key} />
      ))}
    </ul>
  );
};

export default AlbumsList;
