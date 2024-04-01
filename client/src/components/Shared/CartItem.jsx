import { currencyFormatting } from "../../utils/formatting";

const CartItem = ({ meal, onIncrease, onDecrease }) => {
  return (
    <li className="my-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{meal.name}</span>
        <div className="flex items-center justify-around w-80 gap-5">
          <div className="flex items-center gap-4">
            <span
              onClick={onDecrease}
              className=" rounded-full px-2 font-bold cursor-pointer bg-gray-400"
            >
              -
            </span>
            <span className="text-orange-500">x {meal.quantity}</span>
            <span
              onClick={onIncrease}
              className=" rounded-full px-2 font-bold cursor-pointer bg-gray-400"
            >
              +
            </span>
          </div>

          <span>{currencyFormatting.format(meal.price)}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
