import React from 'react';

class Item extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return ( 
            <div className="item col-sm-1">   
                <img className="itemPic"/>
            </div>
        );}
    }


export default Item;