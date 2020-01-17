const Panel = ({ header, body }) => (
  <article className="container">
    <header>{header}</header>
    <section className="body">{body}</section>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-rows: 40px auto;
        height: 90vh;
        padding: 0px 2vw;
        margin-top: 10px;
      }
      .container:nth-child(2) > .body {
        // border-right: 1px solid black;
        // border-left: 1px solid black;
      }
      .body {
        overflow: auto;
      }
      header {
        font-size: 14px;
      }
    `}</style>
  </article>
);
export default Panel;
