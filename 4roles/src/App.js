import React from 'react';
import './App.css';
import axios from 'axios';
import Farming from './components/Farming';
import Mining from './components/Mining';
import Combat from './components/Combat';
import Fishing from './components/Fishing';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, Match, Miss } from 'react-router';

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
            <BrowserRouter>
        <div className="App">
          <Header />
          <Match exactly pattern="/" component={() =>
            <Home
              getSRC={this.getSRC}
            />}/> 
          <Match exactly pattern="/mining" component={() =>
            <Mining
              getSRC={this.getSRC}
            />}/>
          <Match exactly pattern="/farming" component={() =>
            <Farming
              getSRC={this.getSRC}
            />}/> />
          <Match exactly pattern="/fishing" component={() =>
            <Fishing
              getSRC={this.getSRC}
            />}/>
          <Match exactly pattern="/combat" component={() =>
            <Combat
              getSRC={this.getSRC}
            />}/>
            
            
        </div>
      </BrowserRouter>

        );
    }
}

export default App;