import React from 'react';
import TextButton from '../components/TextButton';
import { Hidden } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Hero.css';

const Hero = ({
  backgroundImg, perfumeImg, altText, heroText, buttonText, buttonLink,alignRight
}) => {
  const alignmentClass = alignRight ? 'hero-container-right' : 'hero-container-left';
  return (
    <div className={`${alignmentClass} hero-container`}>
      <div className="hero-background-image-container" style={{backgroundImage: `url(${backgroundImg})`}}></div>
      <img src={perfumeImg} alt={altText} className="hero-page-image"/>
      <div className="hero-text" role="heading" aria-level="3">{heroText}</div>
      <div className="hero-button-container">
        <Link to={buttonLink} style={{ textDecoration: 'inherit'}} className="perfume-link">
          <Hidden xsDown>
            <TextButton text={buttonText} />
          </Hidden>
          <button className="home-mobile-button">{buttonText}</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero;