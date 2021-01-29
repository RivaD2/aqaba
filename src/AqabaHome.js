import React from 'react'
import ImageFade from './components/ImageFade';
import './AqabaHome.css';

const AqabaHome = props  => {
  return (
    <div className="home">
      <div className="home-container-text">
        AQABA
      </div>
      <div className="home-background">
        <ImageFade />
      </div>
    </div>
  )
}

export default AqabaHome;