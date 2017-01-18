import React from 'react';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';

class Fishing extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return ( 
        <div className="App">
                <Header />
                <Action imgURL={this.props.imgURL}/>
                <LiveFeed actionType='fishing' events={this.props.events} incrementer={this.props.incrementer} count={this.props.count}/>
                <Inventory deleteItems={this.props.deleteItems} inventory={this.props.inventory}/>
                <Footer />
            </div>
        )
    }
}
export default Fishing;