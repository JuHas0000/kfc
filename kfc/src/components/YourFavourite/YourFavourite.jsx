import { IoIosAddCircleOutline } from "react-icons/io";
import "./YourFavourite.scss";

const YourFavourite = (props) => {
  const { product } = props;
  return (
    <div className="your-favourite">
      <img src={product.imgUrl} alt={product.name} />
      <h4>{product.name}</h4>
      <button className="add-to-basket">
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
};

export default YourFavourite;
