import React from 'react'
import { Hidden } from '@material-ui/core';
import {Link} from 'react-router-dom';
import ImageFade from '../components/ImageFade';
import TextButton from '../components/TextButton';
import '../pages/AqabaHome.css';

const AqabaHome = props  => {
  return (
    <div className="home App-body">
        <ImageFade />
      <div className="home-content">
        <Link to="/perfumes" style={{ textDecoration: 'inherit'}} className="perfume-link">
          <Hidden xsDown>
            <TextButton text='Discover Aqaba' />
          </Hidden>
          <button className="home-mobile-button">DISCOVER AQABA</button>
        </Link>
      </div>
    </div>
  )
}

export default AqabaHome;