import Link from "next/link";
import SearchForm from "./searchForm";

const Header = ({ onSearchSubmit }) => (
  <div>
    <SearchForm onSubmit={onSearchSubmit} />
  </div>
);

export default Header;
