import { useCart } from "../context/cart";

export function Checkout() {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
      <div>total = {cart.reduce((acc, product) => acc + product.price, 0)}</div>
    </div>
  );
}
