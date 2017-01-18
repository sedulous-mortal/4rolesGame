import React from 'react';

class CurrentLogin extends React.Component{
    render(){
        if (this.props.currentUser){
            return(
                <div className="currentLogin">
            <h4>You are currently logged in as: </h4>
            <h5>{this.props.currentUser}</h5>
                    </div>
            );
        } else return (
            <h4>You are not currently logged in.</h4>
        );        
    }
}

export default CurrentLogin;