import { useCart } from "../context/cart";

export function Header() {
  const { cart } = useCart();
  return (
    <header className="header">
      <div>Cart {cart.length}</div>
    </header>
  );
}
