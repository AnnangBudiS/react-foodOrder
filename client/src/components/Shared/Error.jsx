const Error = ({ title, message }) => {
  return (
    <div className="flex flex-col items-center my-2">
      <h2 className="text-red-500">{title}</h2>
      <p className="text-sm text-gray-500 italic">{message}</p>
    </div>
  );
};

export default Error;
