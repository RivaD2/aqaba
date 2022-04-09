import React from "react";
import { Hidden } from "@material-ui/core";
import TextButton from "../components/TextButton";
import TextField from "../components/TextField";
import "./SubscribeModal.css";

const SubscribeModal = (props) => {
  return (
    <div>
      <div className="subscribe-modal">
        <div className="modal-content">
          <div className="company-title">House of Appa</div>
          <div className="modal-image-container">
            <div className="subscribe-modal-image">
              <img
                src="/assets/blue-spirit.png"
                alt="spirit of knowledge perfume"
                className="subscribe-image"
              />
            </div>
            <div className="text-container">
              <div className="text">Take 15% off your first order.</div>
            </div>
          </div>
          <TextField
            field={{ label: "Username or email" }}
            className="form-text"
          />
          <div className="signup-button-container">
            <Hidden xsDown>
              <TextButton text="Sign Up" onClick={props.onClose} />
            </Hidden>
            <button className="signup-button-mobile" onClick={props.onClose}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscribeModal;
