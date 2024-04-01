const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-orange-500 px-6 py-2 rounded font-bold text-gray-100 hover:bg-orange-400"
    >
      {children}
    </button>
  );
};

export default Button;
