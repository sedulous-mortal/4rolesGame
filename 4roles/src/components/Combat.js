import React from 'react';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';

const Combat = () => {
    return ( 
        <div className="App">
                <Header />
                <Action />
                <LiveFeed actionType='combat'/>
                <Inventory/>
                <Footer />
            </div>
        )
}
export default Combat;