import React from 'react'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import IconButton from "@material-ui/core/IconButton";

export default class Login extends React.Component {
  state = {
    isSignedIn: null,
    name: undefined
  }

  componentDidMount = async () => {
    try {
      return await window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          clientId:'940348597150-aoo83rfir0di6ser2tlos3q99mh1p0jg.apps.googleusercontent.com',
          scope:'email'
        });
        this.auth = window.gapi.auth2.getAuthInstance();
        const name = localStorage.getItem('user');
        this.setState({
         name
        })
        this.auth.isSignedIn.listen(this.AuthChange);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  handleAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  };

  handleSignIn = async e => {
    try {
      if(this.state.isSignedIn) {
        this.auth.signOut();
        this.setState({
          name: undefined,
          isSignedIn: false
        })
        return;
      }
      await this.auth.signIn();
      e.preventDefault();
      const user = this.auth.currentUser.get().getBasicProfile();
      const name = user.getGivenName();
      this.setState({
        name, isSignedIn: true
      })
      localStorage.setItem('user', name);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div className="login-icon-container">
       <IconButton onClick={this.handleSignIn}>
        <PermIdentityOutlinedIcon/>
       </IconButton>
        {this.state.name && 'Hello ' + this.state.name}
      </div>
    )
  }
}
