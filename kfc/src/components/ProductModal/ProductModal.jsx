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
    <div className={`backgroud ${isVisible === true ? "" : "hidden"}`}>
      <header></header>
      <section className="product_info">
        <p>tak</p>
      </section>
      <section className="favourite_products"></section>
      <section className="add_product"></section>
    </div>
  );
};

export default ProductModal;
