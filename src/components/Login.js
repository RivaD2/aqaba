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
        this.auth = window.gapi.auth2.getAuthInstance();

        this.setState({
         isSignedIn: this.auth.isSignedIn.get()
        });
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
  };
  
  toggleSignIn = async () => {
    try {
      if (this.state.isSignedIn) {
         await this.auth.signOut();
        this.setState({
          name: null,
          isSignedIn: false
        });
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
