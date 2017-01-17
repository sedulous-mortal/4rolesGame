import React from 'react';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';

const Fishing = () => {
    return ( 
        <div className="App">
                <Header />
                <Action />
                <LiveFeed actionType='fishing'/>
                <Inventory />
                <Footer />
            </div>
        )
}
export default Fishing;