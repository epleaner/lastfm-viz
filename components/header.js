import Link from "next/link";
import SearchForm from "./searchForm";

const Header = ({ onSearchSubmit }) => (
  <header>
    <SearchForm onSubmit={onSearchSubmit} />
    <style jsx>{`
      display: grid;
      justify-items: center;
    `}</style>
  </header>
);

export default Header;
