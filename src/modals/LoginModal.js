import React from "react";
import TextField from "../components/TextField";
import PasswordInput from "../components/PasswordInput";
import GoogleButton from "react-google-button";
import "./LoginModal.css";

/**
 * Renders Login Modal and holds logic for signing user in using gapi.
 */
const LoginModal = (props) => {
  const handleSignIn = async (e) => {
    try {
      const auth = window.gapi.auth2.getAuthInstance();
      await auth.signIn();
      e.preventDefault();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="login-modal-container">
        <div className="login-modal-image-container">
          <div className="login-modal-image"></div>
        </div>
        <div className="login-modal-content">
          <div>
            <h1 className="login-modal-header">Welcome To House of Appa</h1>
          </div>
          <h3 className="sign-in">Sign In</h3>
          <TextField
            field={{ label: "Username or email" }}
            className="form-text"
          />
          <div className="password-container">
            <div className="form-text">
              <PasswordInput />
            </div>
            <div className="forgot-password-link-container">
              <p className="link">Forgot password?</p>
            </div>
          </div>
          <div className="login-button-container">
            <button className="mobile-login-button">LOGIN</button>
            <div className="google-login-button">
              <GoogleButton type="dark" onClick={handleSignIn} />
            </div>
            <div className="create-account-container">
              <p>Don't have an account?</p>
              <p className="link" onClick={props.showCreateAccountModal}>
                {" "}
                Click here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginModal;
