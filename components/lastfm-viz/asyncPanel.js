import EmptyPanel from "./emptyPanel";
import ErrorPanel from "./errorPanel";
import Panel from "./panel";

const AsyncPanel = props => {
  const { data, render, ...otherProps } = props;

  if (!data) {
    return <EmptyPanel />;
  }

  if (data.error) {
    return <ErrorPanel error={data.error} />;
  }

  return <Panel>{render(data.data, otherProps)}</Panel>;
};

export default AsyncPanel;
