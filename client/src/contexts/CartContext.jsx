import { createContext, useContext, useReducer } from "react";

const CartCtx = createContext();

const cartReducer = (state, action) => {
  // add item to cart
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const exisitingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...state.items[existingItemIndex],
        quantity: exisitingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  // remove item from cart
  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const exisitingItem = state.items[existingItemIndex];

    const updatedItems = [...state.items];

    if (exisitingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...exisitingItem,
        quantity: exisitingItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  //clear cart
  if (action.type === "CLEAR_ITEM") {
    return { ...state, items: [] };
  }
  return state;
};

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }
  function clearItem() {
    dispatch({ type: "CLEAR_ITEM" });
  }

  const values = {
    items: cart.items,
    addItem,
    removeItem,
    clearItem,
  };
  return <CartCtx.Provider value={values}>{children}</CartCtx.Provider>;
}

export const useCart = () => {
  return useContext(CartCtx);
};
