import React from 'react';

const DatabaseTile = props => {
  return(
    <div className="database-skill-tile small-12 medium-6 large-4 columns">
      <h5>{props.database}</h5>
      {props.icon}
    </div>
  )
}

export default DatabaseTile;
