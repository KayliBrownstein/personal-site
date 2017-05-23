import React from 'react';

const LanguageTile = props => {
  return(
    <div className="language-skill-tile small-12 medium-6 large-4 columns">
      <h5>{props.language}</h5>
      {props.icon}
    </div>
  )
}

export default LanguageTile;
