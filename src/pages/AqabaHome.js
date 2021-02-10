import React from 'react'
import ImageFade from '../components/ImageFade';
import TextButton from '../components/TextButton';
import {Link} from 'react-router-dom';
import '../pages/AqabaHome.css';

const AqabaHome = props  => {
  return (
    <div className="home">
        <ImageFade />
      <div className="home-content">
        <Link to="/perfumes" style={{ textDecoration: 'inherit'}} className="perfume-link">
          <TextButton text='Discover Aqaba'/>
        </Link>
      </div>
    </div>
  )
}

export default AqabaHome;