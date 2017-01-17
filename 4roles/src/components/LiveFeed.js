import React from 'react';

class LiveFeed extends React.Component {
    render() {
        return ( 
            <div className = "liveFeed">
                <h4>{`this.${this.props.actionType}Events[0]`}</h4>
            </div>
        );
    }
}

export default LiveFeed;