import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.idproduto === item.idproduto);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.idproduto === item.idproduto
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.idproduto === item.idproduto);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.idproduto !== item.idproduto));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.idproduto === item.idproduto
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    var total=cartItems.reduce((total, item) => total + item.preco * item.quantity, 0);
    localStorage.setItem("total",total)
    return total
  };

  useEffect(() => {
    const data = localStorage.getItem('cartItems');
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(()=>{
    var compra=localStorage.getItem("realizouPagamento")
    var valorPago =localStorage.getItem("total")
    if (compra==="true"){
      clearCart()
      localStorage.removeItem("realizouPagamento")
      if(valorPago){
        localStorage.removeItem("total")
      }
    }
  },[])
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};