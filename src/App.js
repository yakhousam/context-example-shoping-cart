import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Checkout } from "./components/Checkout";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <div className="container">
      <CartProvider>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
