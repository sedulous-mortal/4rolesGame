import React from 'react';
import './App.css';
import axios from 'axios';
import Farming from './components/Farming';
import Mining from './components/Mining';
import Combat from './components/Combat';
import Fishing from './components/Fishing';
import Home from './components/Home';
import {BrowserRouter, Match} from 'react-router';

class App extends React.Component {
        constructor() {
            super();

            this.state = {
                assets: {},
                itemToDelete: {},
                miningEvents: ['You struck gold!', 'A gnome stole your gold!'],
                miningCount: 0,
                farmingEvents: ['You picked a carrot.', 'A rabbit ate your carrot!'],
                farmingCount: 0,
                combatEvents: ['You dropped your flower.', 'You are attacking a wood elf.', 'You got a flower.'],
                combatCount: 0,
                fishingEvents: ['You got a salmon.', 'You got a guppy.', 'A wild cat stole ALL your fishes!'],
                fishingCount: 0
            };

            this.getSRC = this.getSRC.bind(this);
            this.createUser = this.createUser.bind(this);
            this.incrementer = this.incrementer.bind(this);
            this.deleteItems = this.deleteItems.bind(this);
            this.giveItems = this.giveItems.bind(this);

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
    
    //deleteItem method to be called when the text in the feedList says that they lose something
        deleteItems(item) {
            let url= 'https://rolesgame.firebaseio.com/';
            //I cant get this section to do what I need it to
            //so I'm using precise keys in the url to test that it works; it does.
            axios.delete(`${url}users/${this.state.currentUserID}/inventory/.json`)
            .then((response) =>{
                this.setState({assets: response.data});
                console.log(this.state);
            })
            .catch((error) =>{
                console.log(error);
            })
        }
        
        giveItems(itemName){
            let url= 'https://rolesgame.firebaseio.com/';
            axios.patch(`${url}users/${this.state.currentUserID}/${itemName}/.json`)
            .then((response) =>{
                this.setState({users: response.data.users});
                console.log(this.state);
            })
            .catch((error) =>{
                console.log(error);
            })
        }


    //createUser method to be called on click of "login" button, updates state with that user's ID 
    //which corresponds to the object id in firebase for their inventory stuff
        createUser(){
        let url= 'https://rolesgame.firebaseio.com/';
            //let id = the value of the input box after they hit button
            let id = document.getElementById('idInput').value;
           this.setState({currentUser: id, currentInventory: ['carrot']});
            axios.post(`${url}users.json`, {userName: id})
            .then((response) =>{
                this.setState({ currentUserID: response.data.name });
            })
            .catch((error) =>{
                console.log(error);
            })
        }
    sendInventory(){
        let url= 'https://rolesgame.firebaseio.com/';
//           this.setState({currentInventory: ['carrot']});
            axios.post(`${url}users/${this.currentUserID}.json`, {inventory: this.state.currentInventory})
            .then((response) =>{
                this.setState({ inventory: this.state.currentInventory });
            })
            .catch((error) =>{
                console.log(error);
            })
    }
    populateInventory(){
        let url= 'https://rolesgame.firebaseio.com/';
           this.setState({currentInventory: ['carrot']});
            axios.get(`${url}users/${this.currentUserID}.json`)
            .then((response) =>{
                this.setState({currentInventory: response.inventory});
            })
            .catch((error) =>{
                console.log(error);
            })
    }
    
        incrementer(countType, eventType) {
        const stateObject = {};
//            Pass down event type as props from App through to live feed (e.g. "miningEvents")
//            Then pass that through to the incrementor function in order to fill it in
        if (this.state[countType] < this.state.eventType.length - 1) {
            stateObject[countType] = this.state[countType] += 1
        }
        this.setState(stateObject);
        }

        componentWillMount() {
            return <p> LOADING... </p>
        }
        componentDidMount(){
        this.getSRC();
        }

        render(){
            let farmingURL;
            let miningURL;
            let fishingURL;
            let combatURL;
            let events;
            if (Object.keys(this.state.assets).length !== 0){
              farmingURL = this.state.assets.farming.imgURL;
              miningURL = this.state.assets.mining.imgURL;
              fishingURL = this.state.assets.fishing.imgURL;
              combatURL = this.state.assets.combat.imgURL;
//            }
//            console.log(this.currentFeedListText)
//            if (this.state.currentFeedListText == "You picked a carrot."){
////            //give them a carrot in inventory
//            this.giveItems('carrot');
//            }
//            else if (this.state.currentFeedListText == "A rabbit ate your carrot!"){
////            //delete their carrot with an axios call
//            this.setState({itemToDelete: 'carrot'});  
//            console.log('your carrot should be deleted');
        }
            return ( 
                <BrowserRouter>
                    <div className="App">
                        <Match exactly pattern="/"
                        component={() =>
                        <Home currentLogin={this.state.currentUser} createUser={this.createUser}/>}/>
                        
                        <Match exactly pattern = "/mining"
                        component={() =>
                        <Mining imgURL={miningURL} count={this.state.miningCount} countType="miningCount" eventType="miningEvents" events={this.state.miningEvents} incrementer={this.incrementer} deleteItems={this.deleteItems}/>}/>
                                
                        <Match exactly pattern = "/farming"
                        component={() =>
                        <Farming imgURL={farmingURL} incrementer={this.incrementer} count= {this.state.farmingCount} deleteItems={this.deleteItems} events={this.state.farmingEvents}/>}/>
                        
                        <Match exactly pattern="/fishing"
                        component={() =>
                        <Fishing imgURL={fishingURL} incrementer={this.incrementer} events={this.state.fishingEvents} deleteItems={this.deleteItems} count={this.state.fishingCount} />}/>
                        
                        <Match exactly pattern="/combat"
                        component={() =>
                        <Combat imgURL={combatURL} deleteItems={this.deleteItems} incrementer={this.incrementer} count={this.state.combatCount} events={this.state.combatEvents} />}/> 
                        
                    </div>
                </BrowserRouter>
        );
    }
}

export default App;