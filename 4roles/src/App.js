import React from 'react';
import logo from './logo.svg';
import './App.css';
import Action from './components/Action';
import Footer from './components/Footer';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Item from './components/Item';
import LiveFeed from './components/LiveFeed';
import axios from 'axios';



class App extends React.Component {
    constructor(){
        super();
        
        this.state = { stuff: 'test' };
        
        this.getSRC = this.getSRC.bind(this);
        
    }

    getSRC(url){
        axios.get(`${url}`)
        .then((response) => {
            console.log(response);
        return response;
        })
        .catch((error) => {
        console.log(error);
        })    
    }
    
    comonenetWillMount(){
        return <p>LOADING...</p>
        
    }
    
    render() {
        return ( 
            <div className="App">
                <Header />
                <Action />
                <LiveFeed />
                <Inventory getSRC={this.getSRC}/>
                <Footer />
            </div>
        );
    }
}

export default App;