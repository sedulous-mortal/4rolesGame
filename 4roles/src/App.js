import React from 'react';
import logo from './logo.svg';
import './App.css';
import Action from './components/Action';
import Footer from './components/Footer';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Item from './components/Item';
import LiveFeed from './components/LiveFeed';

class App extends React.Component {
    render() {
        return ( 
            <div className="App">
                <Header />
                <Action />
                <LiveFeed />
                <Inventory />
                <Footer />
            </div>
        );
    }
}

export default App;