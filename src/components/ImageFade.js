import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './ImageFade.css';

const ImageFade = (props) => {
  const [index, set] = useState(0)
  const slides = props.children
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  // Interval is still happening after I navigate away
  useEffect(() => {
    const timeoutId = setInterval(() => set(state => (state + 1) % slides.length), 4000);
    return () => {
      clearTimeout(timeoutId);
    }
  }, [slides.length])
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} className="bg App-body">
      {item}
    </animated.div>
  ))
}
export default ImageFade;