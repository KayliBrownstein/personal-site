import React from 'react';

const SwansonTile = props => {
  return(
    <div className="swanson-tile small-12 medium-12 large-12 columns">
		<p>{props.quote}</p>
        <center><div className="button" onClick={props.handleClick}>Click here for a new Ron Swanson quote</div></center>
    </div>
  )
}

export default SwansonTile;