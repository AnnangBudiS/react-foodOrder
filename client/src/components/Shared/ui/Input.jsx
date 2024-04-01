const Input = ({ label, ...props }) => {
  return (
    <div className="mb-2">
      <label className="text-sm font-semibold">{label}</label>
      <input
        {...props}
        className="w-full bg-inherit p-2 border border-2 border-gray-400 rounded-lg focus:ring-0 focus:outline-none focus:border-orange-500"
      />
    </div>
  );
};

export default Input;
