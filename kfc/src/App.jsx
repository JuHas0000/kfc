import { useState } from "react";
import "./App.css";
import products from "./mocks/products.json";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);

  const handleProductSelect = (quantity, product) => {
    let products = [];
    for (let i = 0; i < quantity; i++) {
      products.push(product);
    }
    setOrderedProducts([...orderedProducts, ...products]);
  };

  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      />
      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr />
        <section style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              product={product}
              orderedProducts={orderedProducts}
              onProductSelect={handleProductSelect}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
