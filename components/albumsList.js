import Album from "./album";
import { useState } from "react";

const AlbumsList = props => {
  const { albums, coversOnly } = props;
  const [hoveredAlbum, setHoveredAlbum] = useState();
  let styles;
  return (
    <article>
      <ul className="albums-container">
        {albums.map((album, key) => (
          <Album
            onMouseOver={() => {
              setHoveredAlbum(album);
            }}
            onMouseLeave={() => {
              setHoveredAlbum();
            }}
            coverOnly={coversOnly}
            {...album}
            key={key}
            albumKey={key}
          />
        ))}
        {coversOnly && (
          <style jsx>{`
            .albums-container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
              grid-auto-flow: dense;
            }
          `}</style>
        )}
      </ul>
      {coversOnly &&
        hoveredAlbum && (
          <aside className="hovered-album">
            <div>{hoveredAlbum.name}</div>
            <div className="playcount">
              ({hoveredAlbum.playcount} plays on lastfm)
            </div>
            <style jsx>{`
              .hovered-album {
                display: grid;
                grid-template-rows: 20px auto;
              }

              .playcount {
                font-size: 12px;
              }
            `}</style>
          </aside>
        )}
    </article>
  );
};

export default AlbumsList;
