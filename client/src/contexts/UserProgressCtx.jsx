import { createContext, useContext, useState } from "react";

const UserProgressCtx = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
});

export const useUserProgress = () => {
  return useContext(UserProgressCtx);
};

export default function UserProgressProvider({ children }) {
  const [userProgress, setUserProgress] = useState();

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckOut() {
    setUserProgress("checkout");
  }
  function hideCheckOut() {
    setUserProgress("");
  }

  const values = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  return (
    <UserProgressCtx.Provider value={values}>
      {children}
    </UserProgressCtx.Provider>
  );
}
