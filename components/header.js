import Link from "next/link";
import SearchForm from "./searchForm";

const Header = ({ onSearchSubmit }) => (
  <section>
    <SearchForm onSubmit={onSearchSubmit} />
    <style jsx>{`
      display: grid;
      justify-items: center;
      repeat(auto-fit, minmax(240px, 1fr));
    `}</style>
  </section>
);

export default Header;
