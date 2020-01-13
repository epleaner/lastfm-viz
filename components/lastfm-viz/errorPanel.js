const ErrorPanel = props => {
  const { error } = props;
  const { message } = error;

  return <div>i am an error panel with error message: {message} </div>;
};

export default ErrorPanel;
