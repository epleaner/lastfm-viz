const Panel = ({ header, body }) => (
  <section className="container">
    {header}
    <section className="body">{body}</section>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-rows: 40px auto;
        height: 90vh;
        padding: 0px 2vw;
      }
      .container:nth-child(2) > .body {
        // border-right: 1px solid black;
        // border-left: 1px solid black;
      }
      .body {
        overflow: auto;
      }
    `}</style>
  </section>
);
export default Panel;
