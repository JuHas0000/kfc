import "./Product.scss";
import ProductModal from "../ProductModal/ProductModal";
import { useState } from "react";

const Product = (props) => {
  const { product, orderedProducts, onProductSelect } = props;
  const { name, price, description, imageUrl } = product;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === product.id
  );

  const orderCount = orderedProducts.filter(
    (orderedProduct) => orderedProduct.id === product.id
  ).length;

  return (
    <>
      {isModalVisible && (
        <ProductModal
          product={product}
          isVisible={isModalVisible}
          toggleIsVisible={handleButtonClick}
          onProductSelect={onProductSelect}
        />
      )}
      <article
        className="product"
        style={{
          borderColor: isOrdered ? "#8ea604" : "transparent",
        }}
      >
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <div>
          <header>
            <h4>{name}</h4>
            <p>{description}</p>
          </header>
          <footer>
            <strong>{price}</strong>
            <button onClick={handleButtonClick}>
              {isOrdered ? orderCount : "+"}
            </button>
          </footer>
        </div>
      </article>
    </>
  );
};

export default Product;
