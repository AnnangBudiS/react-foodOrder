import { useCart } from "../../contexts/CartContext";
import { currencyFormatting } from "../../utils/formatting";

const CardMeals = ({ meal }) => {
  const { addItem } = useCart();

  const handleAddItem = () => {
    addItem(meal);
  };

  return (
    <li className="bg-neutral-900 rounded-lg">
      <img
        src={`http://localhost:3000/${meal.image}`}
        alt={meal.name}
        className="objec-contain w-full rounded-t-lg"
      />
      <div className="text-center space-y-2 mt-2 p-2">
        <p className="font-semibold text-orange-500 text-sm">{meal.name}</p>
        <p className="text-sm text-gray-400 italic">"{meal.description}"</p>
        <p className="text-orange-500 text-xl font-bold">
          {currencyFormatting.format(meal.price)}
        </p>
        <div>
          <button
            onClick={handleAddItem}
            className="w-full border p-2 font-semibold duration-300 ease-linear hover:bg-orange-500 hover:border-none rounded-lg"
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default CardMeals;
