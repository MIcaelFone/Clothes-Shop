import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductPage from '../ProductPage';
import Cart from '../cart';

const Context = () => {
  return (
    <Provider store={store}>
      <div>
        <ProductPage />
        <Cart />
      </div>
    </Provider>
  );
};

export default Context;
