import { connect } from "react-redux";
import { addItem, removeItem } from "../actions/actions";

const ItemComponent = ({ itemCount, addItem, removeItem }) => {
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <p>Item Count: {itemCount}</p>
            <p style={{color:"red"}}>{itemCount===0 && <span>Item Count Cannot Be Less Than 0.</span>}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    itemCount: state.itemCount
});

export default connect(mapStateToProps, { addItem, removeItem })(ItemComponent);
