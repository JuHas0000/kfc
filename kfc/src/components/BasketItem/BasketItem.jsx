import "./BasketItem.scss";

const BasketItem = (props) => {
  const { orderedProduct, onProductRemove } = props;
  const { quantity, name, price } = orderedProduct;

  const handleButtonClick = () => {
    onProductRemove(orderedProduct);
  };

  return (
    <li className="basket-item">
      <div className="info">
        <span>{quantity}x</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="actions">
        <button type="button" onClick={handleButtonClick}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
