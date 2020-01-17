import { useState } from "react";

const SearchForm = props => {
  const { onSubmit } = props;
  const [searchQuery, setSearchQuery] = useState("pleanut");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(searchQuery);
      }}
    >
      <input
        type="text"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder={"search for a lastfm user"}
      />
      <button type="submit">></button>

      <style jsx>{`
        input {
          border: none;
          background: transparent;
          border-bottom: 1px solid black;
          outline: none;
        }
      `}</style>
    </form>
  );
};

export default SearchForm;
