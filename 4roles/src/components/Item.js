import React from 'react';

class Item extends React.Component {
    
    render() {
        return ( 
            <div className="item col-sm-1">
            <img className="itemPic" src="https://d1hw6n3yxknhky.cloudfront.net/000491861_prevstill.jpeg"></img>
                
            <img className="itemPic" src = {this.props.getSRC('assets.mining_drops.gold.imgURL')}/>
            </div>
        );}
    }


export default Item;