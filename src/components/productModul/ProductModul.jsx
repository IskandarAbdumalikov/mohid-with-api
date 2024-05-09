import React from "react";
import "./ProductModul.scss";

const ProductModul = ({ data, close }) => {
  return (
    <>
      <div onClick={close} className="modul__overlay"></div>
      <div className="product__detail">
        <h1 onClick={close} className="close-btn">
          X
        </h1>
        <div className="module__left">
          <img src={data.thumbnail} width={300} alt="" />
        </div>
        <div className="module__right">
          <h1>{data.title}</h1>
          <h3>${data.price}</h3>
          <p>Category : {data.category}</p>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductModul;
