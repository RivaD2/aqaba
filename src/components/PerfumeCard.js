import React from 'react'
import { useSpring, animated } from 'react-spring';
import {useHistory, withRouter} from 'react-router-dom';
import './PerfumeCard.css';


const PerfumeCard = () => {
const history = useHistory();
console.log('in history object in perfumeCard', history)

const onCardClick = () => {
  console.log('in onCardClick');
  history.push("/perfume/selected");
}

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
console.log(onCardClick)
return (
  <animated.div
  class="card"
  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
  onMouseLeave={() => set({ xys: [0, 0, 1] })}
  style={{ transform: props.xys.interpolate(trans) }}
  onClick={onCardClick}
  />
  )
}

export default withRouter(PerfumeCard);
