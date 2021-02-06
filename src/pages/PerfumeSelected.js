import React from 'react'
import PerfumeCard from '../components/PerfumeCard';
import './PerfumeSelected.css';
export default class PerfumeSelected extends React.Component {
  render() {
    return (
      <div className="perfume-details-container">
        <div className="perfume-card">
          <PerfumeCard />
        </div>
        <div ClassName="perfume-details">
          
        </div>
      </div>
    )
  }
}
