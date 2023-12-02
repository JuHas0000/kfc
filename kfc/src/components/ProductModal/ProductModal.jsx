import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import products from "../../mocks/products.json";
import YourFavourite from "../YourFavourite/YourFavourite";
import { IconContext } from "react-icons/lib";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import "./ProductModal.scss";

import { useState } from "react";

const ProductModal = (props) => {
  const { product, isVisible, toggleIsVisible, onProductSelect } = props;
  const { imageUrl, name, price, description } = product;
  const [quantity, setQuantity] = useState(1);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleQuantityAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantitySub = () => {
    setQuantity(quantity - 1);
  };
  const handleBackButtonClick = () => {
    toggleIsVisible();
    setQuantity(1);
  };
  const handleAddProductButtonClick = () => {
    onProductSelect(quantity, product);
    toggleIsVisible();
    setQuantity(1);
  };
  return (
    <div className={"background" + (isVisible ? "" : " hidden")}>
      <div className="product-modal">
        <div className="buttons-top">
          <button className="back" onClick={handleBackButtonClick}>
            <IconContext.Provider value={{ size: "3vh" }}>
              <FaLongArrowAltLeft />
            </IconContext.Provider>
          </button>
          <button className="favourite">
            <IconContext.Provider value={{ size: "3vh" }}>
              <FaRegHeart />
            </IconContext.Provider>
          </button>
        </div>
        <div className="info">
          <div className="image">
            <img src={imageUrl} alt={name} />
          </div>
          <header>
            <h4>{name}</h4>
            <h4>{price}</h4>
          </header>
          <p className="description">{description}</p>
        </div>
        <div className="add-your-alikes">
          <p>Dodaj to co lubisz:</p>
          <Carousel responsive={responsive}>
            {products.slice(0, 5).map((product) => (
              <YourFavourite product={product} />
            ))}
          </Carousel>
        </div>
        <div className="buttons-bot">
          <div className="quantity">
            <button
              className="sub"
              onClick={handleQuantitySub}
              disabled={quantity === 1}
            >
              -
            </button>
            <p>{quantity}</p>
            <button className="add" onClick={handleQuantityAdd}>
              +
            </button>
          </div>
          <button className="add-product" onClick={handleAddProductButtonClick}>
            DODAJ DO KOSZYKA {quantity * price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
