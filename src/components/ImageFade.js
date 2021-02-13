import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './ImageFade.css';

const slides = [
  { id: 2, url: '/assets/aqaba.jpg' },
  { id: 4, url: '/assets/image-fade2.jpg'},
]

const ImageFade = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % slides.length), 4000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg App-body"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ))
}
export default ImageFade;