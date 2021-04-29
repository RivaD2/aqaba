import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

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
        console.log('window gapi init', window.gapi.auth2);
        this.auth = window.gapi.auth2.getAuthInstance();
        console.log('what is auth', this.auth)
        const name = localStorage.getItem('user');
        console.log('user logged in', name)
        this.setState({
         name,
         isSignedIn: this.auth.isSignedIn.get()
        })
        console.log('who is stored in state', name)
        this.auth.isSignedIn.listen(this.handleAuthChange);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  handleAuthChange = () => {
    const user = this.auth.currentUser.get().getBasicProfile();
    const name = user.getGivenName();
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
      name: name
    });
    localStorage.setItem('user', name);
  };
  
  // SignOut() will be used on Profile page 
  // onSignInClick = () => {
  //   this.auth.signIn();
  // }
  
  // onSignOutClick = () => {
  //   this.auth.signOut()
  // }

 
  toggleSignIn = async () => {
    try {
      if (this.state.isSignedIn) {
        console.log('what is this.state', this.state.isSignedIn)
        await this.auth.signOut();
        this.setState({
          name: undefined,
          isSignedIn: false
        })
        localStorage.removeItem('user');
      }
      this.props.showLoginModal();
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.toggleSignIn}>
          <PermIdentityOutlinedIcon/>
        </IconButton>
        {this.state.name && 'Hello ' + this.state.name}
      </div>
      
    )
  }
}
