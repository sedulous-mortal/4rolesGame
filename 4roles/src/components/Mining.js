import React from 'react';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';

class Mining extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
    return ( 
        <div className="App">
                <Header />
                <Action imgURL={this.props.imgURL}/>
                <LiveFeed actionType='mining' events={this.props.events} count={this.props.count} countType={this.props.countType} incrementer={this.props.incrementer} />
                <Inventory/>
                <Footer />
            </div>
        )
    }
}
export default Mining;