import React from 'react'
// import ImageFade from '../components/ImageFade';
import Hero from '../components/Hero';
import '../pages/AqabaHome.css';

const AqabaHome = props  => {
  const hero1 = {
    backgroundImg: "assets/avatar-hero-1.png",
    perfumeImg: "assets/appa-in-the-flowerbed.png",
    altText: "Appa and Ang flying over multicolored flowerbed",
    heroText: "Air-bending fragrances",
    buttonText :"Discover Perfumes",
    buttonLink :"/perfumes/air",
  }

  const hero2 = {
    backgroundImg: "assets/hero-2.png",
    perfumeImg: "assets/momo.png",
    altText:"orange and turquoise perfume bottle showing surfer and fish below",
    heroText: "Find your Avatar State",
    buttonText :"Discover Perfumes",
    buttonLink :"/perfumes",
    alignRight: true
  }

  const hero3 = {
    backgroundImg: "assets/hero-3.png",
    perfumeImg: "assets/water-kingdom.png",
    altText:"blue perfume bottle with bird coming out of a lemon",
    heroText: "Way of The Water Bender",
    buttonText :"Discover Perfumes",
    buttonLink :"/perfumes",
  }

  const hero4 = {
    backgroundImg: "assets/hero-4.png",
    perfumeImg: "assets/earth-kingdom.png",
    altText:"green bottle filled with two lovers sitting next to one another",
    heroText: "Down To Earth Vibes",
    buttonText :"Discover Earth",
    buttonLink :"/perfumes",
    alignRight: true
  }

  return (
    <div className="home App-body">
        {/* <ImageFade /> */}
        <Hero {...hero4} />
    </div>
  )
}

export default AqabaHome;