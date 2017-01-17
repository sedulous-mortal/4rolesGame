import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';

const Home = (props) => {
    return ( 
        <div className="App">
                <Header />
                <Action />
                <LiveFeed />
                <Inventory getSRC={props.getSRC}/>
                <Footer />
            </div>
        )
}
export default Home;