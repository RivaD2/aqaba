import React from 'react'
import ImageFade from './components/ImageFade';
import TextButton from './components/TextButton';
import './AqabaHome.css';

const AqabaHome = props  => {
  return (
    <div className="home">
        <ImageFade />
      <div className="home-content">
        <TextButton />
      </div>
    </div>
  )
}

export default AqabaHome;