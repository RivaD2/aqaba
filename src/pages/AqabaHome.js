import React from 'react'
// import ImageFade from '../components/ImageFade';
import Hero from '../components/Hero';
import '../pages/AqabaHome.css';

const AqabaHome = props  => {
  const hero1 = {
    backgroundImg: "assets/avatar-hero-1.jpg",
    perfumeImg: "assets/appa-in-the-flowerbed.png",
    altText: "Appa and Angflying over multicolored flowerbed",
    heroText: "Air-bending fragrances",
    buttonText :"Discover Air",
    buttonLink :"/perfumes/air",
  }

  // const hero2 = {
  //   backgroundImg: "assets/hero-2.jpg",
  //   perfumeImg: "assets/earth-kingdom.jpg",
  //   altText:"green bottle filled with two lovers sitting next to one another",
  //   heroText: "Find your Avatar State",
  //   buttonText :"Discover Earth",
  //   buttonLink :"/perfumes/earth",
  // }

  return (
    <div className="home App-body">
        {/* <ImageFade /> */}
        <Hero {...hero1} />
    </div>
  )
}

export default AqabaHome;