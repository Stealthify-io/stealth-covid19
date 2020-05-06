import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class Google extends Component {
 state={
     isLoggedIn: false,
     userId: '',
     name:'',
     email:'',
     picture:'',
 }
 componentClicked = () =>{
     console.log ("clicked")
 }
 responseGoogle = response => {
     console.log(response)
 }

  render() {
      let googleContent;
      if(this.state.isLoggedIn){
          googleContent = null;
      }else {
        googleContent =  (<GoogleLogin  className="button_google"
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            />);
      }

    return (
      <div>{googleContent}
      </div>
    );
  }
}export default Google;