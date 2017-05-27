import React from 'react';

const ProfExTile = props => {
  return(
    <div className="profex-tile small-12 medium-12 large-12 large-centered columns">
      <div className="profex-left small-12 medium-3 large-3 columns">
        <p><strong>{props.name}</strong></p>
        <p><em>{props.title}</em></p>
      </div>
      <div className="profex-right small-12 medium-3 large-3 columns">
        <p>{props.location}</p>
        <p>{props.dates}</p>
      </div>
    </div>
  )
}

export default ProfExTile;
