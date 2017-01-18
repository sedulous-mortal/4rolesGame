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
//        }}, 1000);
//        this.setState({ interval });
//        //check length of array only do if small enough num
//        
//        //end if
//    }
    
    componentWillUnmount() {
        // Clear the interval
        clearInterval(this.state.interval);     
    }
    render() {
        const actionType = this.props.actionType;
        return ( 
            <div className = "liveFeed">
                <h4>{this.props.events[this.props.count]}</h4>
            </div>
        );
    }
}

export default LiveFeed;