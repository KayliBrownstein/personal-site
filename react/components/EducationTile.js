import React from 'react';

const EducationTile = props => {
  return(
    <div className="education-tile small-12 medium-6 large-6 columns">
      <p><strong>{props.name}</strong></p>
      <p><em>{props.study}</em></p>
      <p className="education-location">{props.location}</p>
      <p className="education-date">{props.dates}</p>
    </div>
  )
}

export default EducationTile;
