import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import {Link} from 'react-router-dom';
import '../components/Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container"> 
        <div className="connect-block">
          <div className="connect-icons">
          <Link 
            to={{pathname:"https://www.instagram.com/?hl=en"}}
            target="#">
              <IconButton>
                <InstagramIcon/>
              </IconButton>
          </Link>
          <Link 
            to={{pathname:"https://www.facebook.com/"}}
            target="#">
              <IconButton>
                <FacebookIcon />
              </IconButton>
          </Link>
          <Link
            to={{pathname:"https://twitter.com/?lang=en"}}
            target="#">
              <IconButton>
                <TwitterIcon />
              </IconButton>
          </Link>
          <Link
            to={{pathname:"https://www.pinterest.com/"}}
            target="#">
              <IconButton>
                <PinterestIcon/>
              </IconButton>
          </Link>
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