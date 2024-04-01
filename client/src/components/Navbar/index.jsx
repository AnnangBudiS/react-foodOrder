import logo from "../../assets/logo.jpg";
import { useCart } from "../../contexts/CartContext";
import { useUserProgress } from "../../contexts/UserProgressCtx";

const Navbar = () => {
  const { items } = useCart();
  const { showCart } = useUserProgress();

  const totalQuantity = items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  function handleShowCart() {
    showCart();
  }

  return (
    <nav className="flex items-center justify-between container mx-auto p-5">
      <div>
        <p className="text-xl font-bold text-orange-500">React FoodOrder</p>
      </div>
      <div className="w-12 p-0.5 pb-6 bg-orange-500 rounded-full">
        <img src={logo} alt="logo" className="rounded-full object-contain" />
      </div>
      <ul>
        <li>
          <button
            onClick={handleShowCart}
            className="text-orange-400 font-semibold"
          >
            Cart({totalQuantity})
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
