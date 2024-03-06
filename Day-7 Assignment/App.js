import React from 'react';
import { Provider } from 'react-redux';
import Products from './components/Products';
import Cart from './components/Cart';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Shopping Cart</h1>
        <Products/>
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;