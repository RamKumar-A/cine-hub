function Error({ message = 'Something went wrong!' }) {
  return (
    <div className="error-container">
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
