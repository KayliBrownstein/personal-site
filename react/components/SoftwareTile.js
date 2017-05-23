import React from 'react';

const SoftwareTile = props => {
  return(
    <div className="software-skill-tile small-12 medium-6 large-4 columns">
      <h5>{props.software}</h5>
      <img src={props.icon} />
    </div>
  )
}

export default SoftwareTile;
