import React from 'react'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import IconButton from "@material-ui/core/IconButton";

export default class LoginModal extends React.Component {
  state = {isSignedIn: null}

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
      console.log(err);
    }
  }

  handleSignIn = () => {
    this.auth.signIn();
  }

  render() {
    return (
     <IconButton onClick={this.handleSignIn}>
      <PermIdentityOutlinedIcon/>
     </IconButton>
    )
  }
}
