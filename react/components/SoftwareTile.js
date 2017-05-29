import React from 'react';

const SoftwareTile = props => {
  return(
    <div className="software-skill-tile small-2 medium-2 large-2 columns">
      <img src={props.icon} width='120' height='170'/>
    </div>
  )
}

export default SoftwareTile;
