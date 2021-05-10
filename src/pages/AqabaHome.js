import React from 'react'
import ImageFade from '../components/ImageFade';
import TextButton from '../components/TextButton';
import {Link} from 'react-router-dom';
import '../pages/AqabaHome.css';

const AqabaHome = props  => {
  return (
    <div className="home App-body">
        <ImageFade />
      <div className="home-content">
        <Link to="/perfumes" style={{ textDecoration: 'inherit'}} className="perfume-link">
          <TextButton text='Discover Aqaba' className="home-button-desktop"/>
          <button className="home-button-mobile">Discover Aqaba</button>
        </Link>
      </div>
    </div>
  )
}

export default AqabaHome;