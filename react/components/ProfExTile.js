import React from 'react';

const ProfExTile = props => {
  return(
    <div className="profex-tile small-12 medium-12 large-12 large-centered columns">
      <div className="profex-left small-12 medium-6 large-6 columns">
        <h5><strong>{props.name}</strong></h5>
        <p><em>{props.title}</em></p>
      </div>
      <div className="profex-right small-12 medium-4 large-4 columns">
        <p>{props.location}</p>
        <p>{props.dates}</p>
      </div>
    </div>
  )
}

export default ProfExTile;
