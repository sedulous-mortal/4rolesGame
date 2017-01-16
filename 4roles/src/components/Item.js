import React from 'react';

class Item extends React.Component {
    render() {
        if (this.props.src=='flower'){
        return ( 
            <div className="item col-sm-1">
            <img className="itemPic" src = "http://www.clipartkid.com/images/195/waltham-cc-elementary-school-dist-185-PqR4df-clipart.jpg" />
            </div>
        );}
        else return(
      <img className="itemPic" src='https://d1hw6n3yxknhky.cloudfront.net/000491861_prevstill.jpeg' />
        );
    }
}

export default Item;