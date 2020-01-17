import EmptyPanel from "./emptyPanel";
import ErrorPanel from "./errorPanel";
import Panel from "./panel";

const AsyncPanel = props => {
  const { data, loading, header, body, ...otherProps } = props;

  if (loading) return <Panel body={"loading"} />;

  if (!data) return <EmptyPanel />;

  if (data.error) return <ErrorPanel error={data.error} />;

  return <Panel header={header} body={body(data.data, otherProps)} />;
};

export default AsyncPanel;
