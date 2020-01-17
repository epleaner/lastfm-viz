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
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
