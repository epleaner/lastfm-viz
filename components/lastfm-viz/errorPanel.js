const ErrorPanel = props => {
  const { error } = props;
  const { message } = error;

  return <span>i am an error panel with error message: {message} </span>;
};

export default ErrorPanel;
