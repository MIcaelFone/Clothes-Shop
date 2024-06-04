const initialState = {
    cart: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload }] };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: action.payload.qty }
              : item
          ),
        };
      default:
        return state;
    }
  };
  