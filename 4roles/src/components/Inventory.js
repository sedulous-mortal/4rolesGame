import React from 'react';
import Item from './Item';

class Inventory extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return ( 
            <div className = "inventory" >
                <h4 className="InventoryText">Inventory</h4>
                <div id = "inventory">
                        <Item getSRC={this.props.getSRC}/>
                        <Item getSRC={this.props.getSRC}/>
                        <Item getSRC={this.props.getSRC}/>
                        <Item getSRC={this.props.getSRC}/>
                        <Item getSRC={this.props.getSRC}/>
                        <Item getSRC={this.props.getSRC}/>
                        <Item getSRC={this.props.getSRC}/>
                        <Item getSRC={this.props.getSRC}/>
                    <button id="delete" onClick={() => this.props.deleteItems(this.props.inventory)}>Delete Inventory</button>
                </div>
            </div>
        );
    }
}

export default Inventory;