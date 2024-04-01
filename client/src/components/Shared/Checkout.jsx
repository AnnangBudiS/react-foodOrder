import { useCart } from "../../contexts/CartContext";
import { useUserProgress } from "../../contexts/UserProgressCtx";
import useHttp from "../../hooks/useHttp";
import { currencyFormatting } from "../../utils/formatting";
import Error from "./Error";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Modal from "./ui/Modal";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
};
const Checkout = () => {
  const { progress, hideCheckOut } = useUserProgress();
  const { clearItem } = useCart();
  const { items } = useCart();
  const {
    data,
    loading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleClose() {
    hideCheckOut();
  }

  function handleFinish() {
    hideCheckOut();
    clearItem();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      })
    );
  }

  let action = (
    <>
      <Button onClick={handleClose}>Close</Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    action = <span>Sending Order Data ...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinish}>
        <div className="text-center space-y-1 text-gray-500">
          <h2 className="text-2xl text-orange-500 font-bold">Success!!!</h2>

          <p className="font-semibold">Your Order Was Submitder successfully</p>
          <p className="italic">
            we will get to you with more details via email within the nest few
            minutes.
          </p>
        </div>

        <p className="flex items-center justify-center my-5">
          <Button onClick={handleFinish}>Finish Order</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={progress === "checkout"}>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold">Checkout</h2>
          <p>
            Total Amount:{" "}
            <span className="font-bold text-orange-500">
              {currencyFormatting.format(cartTotal)}
            </span>{" "}
          </p>
        </div>

        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="john doe"
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="example@example.com"
        />
        <Input
          label="Address"
          type="text"
          name="street"
          placeholder="Jl. soedirman No 25"
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Postal Code"
            name="postal-code"
            type="text"
            placeholder="23145"
          />
          <Input
            label="City"
            name="city"
            type="text"
            placeholder="Yogyakarta"
          />
        </div>
        {error && <Error title="Failed to Submit Order" message={error} />}
        <p className="flex items-center justify-end gap-4 mt-4">{action}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
