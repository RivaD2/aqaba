import React from 'react'
import PerfumeCard from './PerfumeCard';
import './AqabaMasculine.css';

export default class AqabaMasculine extends React.Component {
  render() {
    return (
      <div className="list-container">
        <div className="perfumes-masculine">
          AQABA MASCULINE
        </div>
        <div className="perfumes-list-masculine">
          <PerfumeCard />
        </div>
      </div>
    )
  }
}
