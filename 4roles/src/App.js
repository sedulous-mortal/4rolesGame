import React from 'react';
import './App.css';
import axios from 'axios';
import Farming from './components/Farming';
import Mining from './components/Mining';
import Combat from './components/Combat';
import Fishing from './components/Fishing';
import Home from './components/Home';
import Header from './components/Header';
import {BrowserRouter, Match, Miss} from 'react-router';

class App extends React.Component {
        constructor() {
            super();

            this.state = {};

            this.getSRC = this.getSRC.bind(this);

            let miningEvents = ['You struck gold!', 'A gnome stole your gold!'];
            let farmingEvents = ['You picked a carrot.', 'A rabbit ate your carrot!'];
            let combatEvents = ['You dropped your flower.', 'You are attacking a wood elf.', 'You got a flower.'];
            let fishingEvents = ['You got a salmon', 'You got a guppy', 'A wild cat just stole ALL your fishes!'];
        }

        getSRC() {
            let url = 'https://rolesgame.firebaseio.com/assets/.json';
            axios.get(url)
                .then((response) => {
                this.setState({assets: response.data});
                console.log(this.state);
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        componentWillMount() {
            return <p> LOADING... </p>
        }
        componentDidMount(){
        this.getSRC();
        }

        render(){
            return ( 
                <BrowserRouter>
                    <div className="App">
                        <Match exactly pattern="/"
                        component={() =>
                        <Home />}/>
                        
                        <Match exactly pattern = "/mining"
                        component={() =>
                        < Mining />}/>
                                
                        <Match exactly pattern = "/farming"
                        component={() =>
                        <Farming imgURL={"https://s23.postimg.org/qcxkbq60b/farming.gif"}/>}/>
                        
                        <Match exactly pattern="/fishing"
                        component={() =>
                        <Fishing />}/>
                        
                        <Match exactly pattern="/combat"
                        component={() =>
                        <Combat />}/> 
                        
                    </div>
                </BrowserRouter>

        );
    }
}

export default App;