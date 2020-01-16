import EmptyPanel from "./emptyPanel";
import ErrorPanel from "./errorPanel";

const AsyncPanel = props => {
  const { data, render, ...otherProps } = props;

  if (!data) {
    return <EmptyPanel />;
  }

  if (data.error) {
    return <ErrorPanel error={data.error} />;
  }

  return <section>{render(data.data, otherProps)}</section>;
};

export default AsyncPanel;
