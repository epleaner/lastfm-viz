const Anchor = ({ children, ...otherProps }) => (
  <a {...otherProps}>
    {children}
    <style jsx>{`
      text-decoration: none;
      color: inherit;
    `}</style>
  </a>
);

export default Anchor;
