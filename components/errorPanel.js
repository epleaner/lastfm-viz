import Panel from "./panel";

const ErrorPanel = props => {
  const { error } = props;
  const { message } = error;

  return <Panel>i am an error panel with error message: {message} </Panel>;
};

export default ErrorPanel;
