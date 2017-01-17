import React from 'react';
import Header from './Header';
import Action from './Action';
import LiveFeed from './LiveFeed';
import Inventory from './Inventory';
import Footer from './Footer';
import {Link} from 'react-router';

const Home = (props) => {
    return ( 
        <div className="App">
            <h1> Welcome to 4 Roles: the Game! </h1>
            <button id="login">LOGIN</button>
            <p> Select a role: </p>
            <ul>
                <li><Link to="/mining"
                activeOnlyWhenExact activeClassName="active"><img src="https://s24.postimg.org/ys42biyjp/mining.gif" alt="Mining"/>Mining</Link></li>
                
                <li><Link to="/fishing"
                activeOnlyWhenExact activeClassName="active"><img src="https://s30.postimg.org/mb1mz8pm9/fishing.gif" alt="Fishing"/>Fishing</Link></li>
            </ul>
            <ul>
                <li><Link to="/combat" activeOnlyWhenExact activeClassName="active"><img src='https://s24.postimg.org/pa65glisl/combat.gif' alt="Combat"/>Combat</Link></li>
                
                <li><Link to="/farming" activeOnlyWhenExact activeClassName="active"><img src="https://s23.postimg.org/qcxkbq60b/farming.gif" alt="Farming"/>Farming</Link></li>
            </ul>
                <Footer />
        </div>
        )
}
export default Home;