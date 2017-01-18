import React from 'react';

class Action extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return ( 
            <div className="action">
                <img src={this.props.imgURL}/>
            </div>
        );
    }
}

export default Action;