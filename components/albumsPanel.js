import AlbumsList from "./albumsList";
import AsyncPanel from "./asyncPanel";
import { useState } from "react";

const AlbumsPanel = props => {
  const { selectedArtist } = props;
  const [coversOnly, setCoversOnly] = useState(false);

  const sortByPlaycount = (
    { playcount: playcountA },
    { playcount: playcountB }
  ) => playcountB >= playcountA;

  return (
    <AsyncPanel
      {...props}
      header={
        <div>
          <h1>albums of {selectedArtist}</h1>
          <button onClick={() => setCoversOnly(!coversOnly)}>
            {coversOnly ? "show list" : "show covers"}
          </button>
        </div>
      }
      body={(data, otherProps) => {
        const sortedData = data.sort(sortByPlaycount);
        return (
          <AlbumsList
            coversOnly={coversOnly}
            albums={sortedData}
            {...otherProps}
          />
        );
      }}
    />
  );
};

export default AlbumsPanel;
