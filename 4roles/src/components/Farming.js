import React from 'react';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';

class Farming extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return ( 
        <div className="App">
                <Header />
                <Action imgURL={this.props.imgURL}/>
                <LiveFeed incrementer={this.props.incrementer} actionType='farming' events={this.props.events}/>
                <Inventory />
                <Footer />
            </div>
        )
    }
}
export default Farming;