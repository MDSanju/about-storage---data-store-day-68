import React from "react";

const ReviewItems = (props) => {
  const { name, price, quantity, img, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => props.handleRemove(key)} className="btn-regular">
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default ReviewItems;
