import React from 'react'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import IconButton from "@material-ui/core/IconButton";

export default class LoginModal extends React.Component {
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
        })
      });
    } catch (err) {
      console.error(err);
    }
  }

  handleSignIn = async () => {
    try {
      await this.auth.signIn();
      const user = this.auth.currentUser.get().getBasicProfile();
      console.log('show me user', user);
      const name = user.getGivenName();
      this.setState({
        name
      })
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
       <IconButton onClick={this.handleSignIn}>
        <PermIdentityOutlinedIcon/>
       </IconButton>
        {this.state.name && 'Hello ' + this.state.name}
      </div>
    )
  }
}
