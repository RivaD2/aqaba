import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

export default class Login extends React.Component {
  state = {
    isSignedIn: null,
    name: null,
  };

  componentDidMount = async () => {
    try {
      return await window.gapi.load("client:auth2", () => {
        window.gapi.client.init({
          clientId: REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email",
        });
        this.auth = window.gapi.auth2.getAuthInstance();

        this.setState({
          isSignedIn: this.auth.isSignedIn.get(),
        });
        this.auth.isSignedIn.listen(this.handleAuthChange);
      });
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Gets basicProfile from gapi and signs user in
   */
  handleAuthChange = () => {
    const user = this.auth.currentUser.get().getBasicProfile();
    const name = user.getGivenName();
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
      name: name,
    });
  };

  /**
   * Toggles state of isSignedIn, signs user out if signed in
   */
  toggleSignIn = async () => {
    try {
      if (this.state.isSignedIn) {
        await this.auth.signOut();
        this.setState({
          name: null,
          isSignedIn: false,
        });
      }
      this.props.showLoginModal();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.toggleSignIn}>
          <PermIdentityOutlinedIcon />
        </IconButton>
        {this.state.name && <p>{"Hello " + this.state.name}</p>}
      </div>
    );
  }
}
