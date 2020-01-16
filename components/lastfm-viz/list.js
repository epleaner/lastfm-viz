const List = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      list-style: none;
    `}</style>
  </ul>
);

export default List;
