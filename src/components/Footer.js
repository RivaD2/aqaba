import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import '../components/Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container"> 
        <div className="connect-block">
          <div className="connect-icons">

            <IconButton>
              <InstagramIcon/>
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <PinterestIcon/>
            </IconButton>
          </div>
        </div>
        <div className="footer-link">
          PRESS
        </div>
        <div className="footer-link">
          BLOG
        </div>
        <div className="footer-link">
          VIDEO
        </div>
        <div className="footer-link">
          SUBSCRIBE
        </div>
      </div>
    )
  }
}