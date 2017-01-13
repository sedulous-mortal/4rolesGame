import React from 'react';
import Item from './Item';

class Inventory extends React.Component {
    render() {
        return ( 
            <div className = "inventory" >
                <h4 className="InventoryText">Inventory</h4>
                <div id = "inventory">
                    <Item />
                    <Item />
                    <Item />
                </div> 
            </div>
        );
    }
}

export default Inventory;