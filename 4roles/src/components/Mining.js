import React from 'react';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';

const Mining = () => {
    return ( 
        //<Action imgURL = {this.state.assets.mining.imgURL}/>
        <div className="App">
                <Header />
                <Action />
                <LiveFeed actionType='mining' />
                <Inventory/>
                <Footer />
            </div>
        )
}
export default Mining;