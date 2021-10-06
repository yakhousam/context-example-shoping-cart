import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        const products = data.slice(0, 5).map((product) => {
          const price = Math.floor(Math.random() * 100 + 10);
          return { ...product, price };
        });
        setProducts(products);
      })
      .catch(console.error);
  }, []);
  return (
    <main>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <Link className="btn-ckeckout" to="/checkout">
        Checkout
      </Link>
    </main>
  );
}

function Product({ product }) {
  const { addProduct } = useCart();

  return (
    <div className="product">
      <p>{product.title}</p>
      <p> ${product.price}</p>
      <button onClick={() => addProduct(product)}>Buy</button>
    </div>
  );
}
