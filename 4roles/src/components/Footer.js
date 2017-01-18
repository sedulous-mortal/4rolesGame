import React from 'react';

class Footer extends React.Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div className="footer">
        <h4> - Created by <a href="http://alisonnicolestuart.tech">Alison Stuart</a> @ <a href="http://generalassemb.ly">GA</a> - </h4>
            <h5>- Art by <a href="https://www.linkedin.com/in/trey-nolte-984a42b4">Trey Nolte</a> -</h5>
      </div>
    );
  }
}

export default Footer;