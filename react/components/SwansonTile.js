import React from 'react';

const SwansonTile = props => {
  return(
    <div className="swanson-tile small-12 medium-12 large-12 columns">
		<center><img src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F93286f67-e48d-438f-8609-ac2d4e8feb29.jpg" id="swanson-image" /></center>
		<center><p>{props.quote}</p></center>
        <center><div className="button" onClick={props.handleClick}>Next Ron Swanson quote</div></center>
    </div>
  )
}

export default SwansonTile;