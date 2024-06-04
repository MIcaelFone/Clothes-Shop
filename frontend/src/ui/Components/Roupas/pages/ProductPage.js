import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const ProductPage = ({ cart }) => {
  const prod = {
    id: 1,
    name: "Tênis Feio",
    description: "Lorem ipsum dolor sit amet. Non quia adipisci ut architecto sunt et enim perferendis.",
    price: "9.99",
    image: "https://imgnike-a.akamaihd.net/768x768/0136111E.jpg",
    inStock: true,
  };

  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Adicionando ao carrinho:", prod);
    dispatch({ type: "ADD_TO_CART", payload: { ...prod, qty: amount } });
  };

  const handleRemoveFromCart = () => {
    console.log("Removendo do carrinho:", prod);
    dispatch({ type: "REMOVE_FROM_CART", payload: prod });
  };

  return (
    <div className="d-flex flex-column flex-lg-row gap-4">
      <div className="d-flex flex-column gap-3">
        <img src={prod.image} alt="" className="w-100 h-auto rounded mb-3" />
      </div>

      <div className="d-flex flex-column">
        <div>
          <span className="text-primary fw-semibold">Produto</span>
          <h1 className="fs-1 fw-bold">{prod.name}</h1>
        </div>
        <p className="text-muted">{prod.description}</p>
        <div>
          <h6 className="fs-4 fw-semibold">R$ {prod.price}</h6>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <div className="d-flex flex-row align-items-center">
            <button
              className="bg-light px-3 rounded text-dark fs-1"
              onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <span className="py-2 px-3 rounded">{amount}</span>
            <button
              className="bg-light px-3 rounded text-dark fs-1"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          {cart && cart.some((p) => p.id === prod.id) ? (
            <Button variant="danger" onClick={handleRemoveFromCart}>
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={handleAddToCart}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
