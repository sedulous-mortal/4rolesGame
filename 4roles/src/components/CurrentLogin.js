import React from 'react';

class CurrentLogin extends React.Component{
    render(){
        if (this.props.currentUser){
            return(
                <div className="currentLogin">
            <h4>You are currently logged in as: </h4>
            <h3>{this.props.currentUser}</h3>
                    <br/>
                    </div>
            );
        } else return (
            <h4>You are not currently logged in.</h4>
        );        
    }
}

export default CurrentLogin;