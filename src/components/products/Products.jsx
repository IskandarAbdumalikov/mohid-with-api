import React, { useEffect, useState } from "react";
import "./products.scss";
import ProductModul from "../productModul/ProductModul";
import stars from "../../assets/stars.svg";
import mainUrl from "../../api";
import Loading from "../loading/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cardCount, setCardCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [option, setOption] = useState("products");
  const cardCounts = 3;

  useEffect(() => {
    setLoading(true);
    mainUrl
      .get(`${option}`, {
        params: {
          limit: cardCount * cardCounts + 3,
          category: selectedCategory,
        },
      })
      .then((res) => setProducts(res.data[option]))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [cardCount, selectedCategory, option]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCardCount(1);
  };
  const productItems = products?.map((product) => (
    <div key={product.id} className="product__card">
      <img
        className="card__img"
        onClick={() => openModal(product)}
        src={product.thumbnail}
        alt=""
      />
      <div className="product__card__info">
        <h1>{product.title}</h1>
        <h3>{product.price}$</h3>
        <h3>Brand : {product.brand}</h3>
        <img className="product__card__stars" src={stars} alt="" />
        <button className="see__details-btn" onClick={() => openModal(product)}>
          See more details
        </button>
      </div>
    </div>
  ));
  const usersItems = products?.map((user) => (
    <div key={user.id} className="product__card">
      <img
        className="card__img"
        onClick={() => openModal(user)}
        src={user.image}
        alt=""
      />
      <div className="product__card__info">
        <h1>{user.firstName}</h1>
        <h3>{user.phone}</h3>
        <h3>{user.gender}</h3>
        <img className="product__card__stars" src={stars} alt="" />
        <button className="see__details-btn" onClick={() => openModal(user)}>
          See more details
        </button>
      </div>
    </div>
  ));
  const todoItems = products?.map((todo) => (
    <div key={todo.id} className="product__card todo__card">
      <h1>{todo.todo}</h1>
      <h3>{todo.completed}</h3>
      <h3>user id : {todo.userId}</h3>
      <img className="product__card__stars" src={stars} alt="" />
      <button className="see__details-btn" onClick={() => openModal(todo)}>
        See more details
      </button>
    </div>
  ));
  return (
    <>
      <section className="products__section container">
        <h3 className="products__theme">Find your favorite smartwatch.</h3>
        <div className="products__header">
          <h2 className="products__title">Our Latest Products</h2>
          {false ? (
            <select
              name="select"
              id=""
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="laptops">Laptops</option>
              <option value="smartphones">Smartphones</option>
            </select>
          ) : (
            <></>
          )}
          <div className="change__btns">
            <button onClick={() => setOption("products")}>Products</button>
            <button onClick={() => setOption("users")}>users</button>
            <button onClick={() => setOption("todos")}>todos</button>
          </div>
        </div>
        {option === "products" ? (
          <div className="product__wrapper">{productItems}</div>
        ) : option === "todos" ? (
          <div className="product__wrapper">{todoItems}</div>
        ) : option === "users" ? (
          <div className="product__wrapper">{usersItems}</div>
        ) : (
          "nothing founded"
        )}
        {loading ? <Loading /> : <></>}
        <button
          className="view-more__btn"
          onClick={() => setCardCount((p) => p + 1)}
        >
          View more
        </button>
      </section>
      {selectedProduct ? (
        <ProductModul data={selectedProduct} close={closeModal} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Products;
