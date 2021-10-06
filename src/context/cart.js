const { createContext, useState, useContext } = require("react");

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addProduct = (product) => {
    setCart([...cart, product]);
  };
  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const { cart, addProduct } = useContext(CartContext);
  return { cart, addProduct };
}
