import { connect } from "react-redux";
import { addItem, removeItem } from "../actions/actions";

const ItemComponent = ({ addItem, removeItem }) => {
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
        </div>
    );
};

export default connect(null, { addItem, removeItem })(ItemComponent);
