import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';

const Farming = () => {
    return ( 
        <div className="App">
                <Header />
                <Action />
                <LiveFeed />
                <Inventory getSRC={this.getSRC}/>
                <Footer />
            </div>
        )
    
}
export default Farming;