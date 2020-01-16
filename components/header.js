import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>about</a>
    </Link>
    <Link href="/lastfm-viz">
      <a style={linkStyle}>lastfm</a>
    </Link>
  </div>
);

export default Header;
