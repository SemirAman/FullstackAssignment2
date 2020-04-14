import React from 'react';
import '../login/login.css';

class Login extends React.Component {

    constructor(props) {
      super(props);
    }
  
    state = {
      loggedIn:false
    }
    loginHandle = () => {
      this.setState(
        {loggedIn:true} 
      )
    }
  
    render() {
      return (
        <div className="root-container">
          <div className="inner-container">
    
              <div className="input-group">
                <label className="login-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username"/>
              </div>
    
              <div className="input-group">
                <label className="login-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"/>
              </div>
    
              <button
                type="button"
                className="login-btn">
                login
              </button>
            </div>
        </div>
      );
    }
  
  }

  export default Login;