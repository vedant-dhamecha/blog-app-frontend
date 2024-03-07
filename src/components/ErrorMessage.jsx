const ErrorMessage = ({ message }) => {
  return (
    <>
      <br></br>
      <br></br>
      <div className="w-full rounded-lg text-gray-900 bg-red-400 mx-auto px-4 py-2 max-w-md">
        <p>{message}</p>
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default ErrorMessage;
