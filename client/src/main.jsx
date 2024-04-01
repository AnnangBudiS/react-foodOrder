import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./contexts/CartContext.jsx";
import UserProgressProvider from "./contexts/UserProgressCtx.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProgressProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProgressProvider>
  </React.StrictMode>
);
