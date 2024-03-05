import React from 'react';
import { Provider } from 'react-redux';
import { connect } from "react-redux";
import ItemComponent from './components/ItemComponent';

const App = ({itemCount}) => {
  return (
      <div>
        <h1>Item Counter App</h1>
        <ItemComponent />
        <p>Item Count: {itemCount}</p>
        <p style={{ color: "red" }}>{itemCount === 0 && <span>Item Count Cannot Be Less Than 0.</span>}</p>
      </div>
  );
}

const mapStateToProps = (state) => ({
  itemCount: state.itemCount
});

export default connect(mapStateToProps)(App);
