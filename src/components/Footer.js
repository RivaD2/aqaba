import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import "../components/Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="aqaba-summary-container">
          <div className="aqaba-summary">
            <p className="mobile-summary-title">About House of Appa:</p>
            <p>
              House of Appa is inspired by Avatar: The Last Airbender, an
              American animated television series. Scents are not for purchase
              and are placeholders for demo purposes.
            </p>
          </div>
        </div>
        <div className="icon-and-link-container">
          <div className="connect-block">
            <div className="connect-icons">
              <Link
                to={{ pathname: "https://www.instagram.com/?hl=en" }}
                target="#"
              >
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </Link>
              <Link to={{ pathname: "https://www.facebook.com/" }} target="#">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
              </Link>
              <Link
                to={{ pathname: "https://twitter.com/?lang=en" }}
                target="#"
              >
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Link>
              <Link to={{ pathname: "https://www.pinterest.com/" }} target="#">
                <IconButton>
                  <PinterestIcon />
                </IconButton>
              </Link>
            </div>
          </div>
          <div className="footer-link">PRESS</div>
          <div className="footer-link">BLOG</div>
          <div className="footer-link">VIDEO</div>
          <div className="footer-link" onClick={this.props.showSubscribeModal}>
            SUBSCRIBE
          </div>
        </div>
        <div className="form-container">
          <p className="form-title">SUBSCRIBE</p>
          <form id="email-form">
            <div className="form-group">
              <label htmlFor="email-address" />
              <input
                type="text"
                placeholder="Enter your email address"
                className="form-control"
              />
            </div>
          </form>
          <button
            className="subscribe-button"
            onClick={this.props.showSubscribeModal}
          >
            SUBSCRIBE
          </button>
        </div>
      </footer>
    );
  }
}
