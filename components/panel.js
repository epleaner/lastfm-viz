const Panel = ({ header, body }) => (
  <section className="container">
    {header}
    <section className="body">{body}</section>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-rows: 40px 1fr;
      }
      .body {
        height: 100vh;
        overflow: auto;
      }
    `}</style>
  </section>
);
export default Panel;
