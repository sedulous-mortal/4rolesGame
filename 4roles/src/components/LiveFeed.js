import React from 'react';

class LiveFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            interval: null,
        };
    }
    
//    componentDidMount() {
//        // Start the interval
//        const interval = setInterval(()=>{if (this.props.count <= this.props.events.length){
//            //do the incrementer on the given counter
//            console.log('tick');
//            this.props.incrementer(this.props.countType);
//        }}, 5000);
//        let currentFeedListText = document.getElementById(this.feedListText).innerHTML;
//        this.setState({ interval });
//        //check length of array only do if small enough number
//    }
    
    componentWillUnmount() {
        // Clear the interval
        clearInterval(this.state.interval);     
    }
    render() {
        const actionType = this.props.actionType;
        return ( 
            <div className = "liveFeed">
                <h4 id="feedListText">{this.props.events[this.props.count]}</h4>
            </div>
        );
    }
}

export default LiveFeed;