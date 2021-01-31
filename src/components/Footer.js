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
          CONNECT
        </div>
        <div className="connect-icons">
          <IconButton>
            <InstagramIcon onClick={this.showCartModal}/>
          </IconButton>
          <IconButton>
            <FacebookIcon onClick={this.showCartModal} />
          </IconButton>
          <IconButton>
            <TwitterIcon onClick={this.showCartModal} />
          </IconButton>
          <IconButton>
            <PinterestIcon onClick={this.showCartModal}/>
          </IconButton>
        </div>
        <div className="Press">
          PRESS
        </div>
        <div className="blog">
          BLOG
        </div>
        <div className="video">
          VIDEO
        </div>
        <div ClassName="subscribe">
          SUBSCRIBE
        </div>
      </div>
    )
  }
}