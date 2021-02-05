import React from 'react'
import PerfumeCard from './PerfumeCard';
import './AqabaFeminine.css';
export default class AqabaFeminine extends React.Component {
  render() {
    return (
      <div className="list-container">
        <div className="perfumes-feminine">
          AQABA FEMININE
        </div>
        <div className="perfumes-list-feminine">
          <PerfumeCard />
        </div>
      </div>
    )
  }
}
