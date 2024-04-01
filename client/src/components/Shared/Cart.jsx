import { useCart } from "../../contexts/CartContext";
import { useUserProgress } from "../../contexts/UserProgressCtx";
import { currencyFormatting } from "../../utils/formatting";
import CartItem from "./CartItem";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

const Cart = () => {
  const { items, addItem, removeItem } = useCart();
  const { progress, hideCart, showCheckOut } = useUserProgress();

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    hideCart();
  }

  function handleCheckout() {
    showCheckOut();
  }
  return (
    <Modal
      open={progress === "cart"}
      onClose={progress === "cart" ? handleCloseCart : null}
    >
      <h2 className="text-xl font-bold text-orange-500">Your Cart</h2>
      <ul>
        {items.map((meal, index) => (
          <CartItem
            key={index}
            meal={meal}
            onDecrease={() => removeItem(meal.id)}
            onIncrease={() => addItem(meal)}
          />
        ))}
      </ul>
      <div className="flex justify-end pr-14 font-bold">
        <p>{currencyFormatting.format(cartTotal)}</p>
      </div>
      <hr className="my-4 border-1 border-gray-400" />
      <div className="flex justify-end items-center gap-5">
        <Button onClick={handleCloseCart}>Close</Button>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </Modal>
  );
};

export default Cart;
