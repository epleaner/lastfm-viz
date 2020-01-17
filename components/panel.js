const Panel = ({ header, body }) => (
  <section className="container">
    {header}
    <section className="body">{body}</section>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-rows: 40px auto;
        height: 90vh;
      }
      .body {
        overflow: auto;
      }
    `}</style>
  </section>
);
export default Panel;
