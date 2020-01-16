const Panel = ({ children }) => (
  <section>
    {children}
    <style jsx>{`
      height: 100vh;
      overflow: auto;
    `}</style>
  </section>
);
export default Panel;
