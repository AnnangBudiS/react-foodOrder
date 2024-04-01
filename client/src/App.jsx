import Navbar from "./components/Navbar";
import Cart from "./components/Shared/Cart";
import Checkout from "./components/Shared/Checkout";
import Meals from "./components/Shared/Meals";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-5 pb-20">
        <Meals />
      </main>
      <Cart />
      <Checkout />
    </>
  );
};

export default App;
