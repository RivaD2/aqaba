import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './ImageFade.css';

const slides = [
  { id: 0, url: '/assets/aqaba-sands.png'},
  { id: 1, url: '/assets/aqaba-arch.png' },
  { id: 2, url: '/assets/aqaba-spring.png' },
  { id: 3, url: '/assets/el-manara.png'},
]

const ImageFade = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 3000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ))
}
export default ImageFade;