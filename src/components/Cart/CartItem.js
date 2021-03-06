import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-3 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: $ </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <button className="btn btn-black mx-1" onClick={() => decrement(id)}>
            -
          </button>
          <span className="btn btn-price mx-1">{count}</span>
          <button className="btn btn-black mx-1" onClick={() => increment(id)}>
            +
          </button>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div onClick={() => removeItem(id)} className="cart-icon">
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: $ </strong>
        {total}
      </div>
    </div>
  );
};

export default CartItem;
