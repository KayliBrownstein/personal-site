import React from 'react';

const LanguageTile = props => {
  return(
    <div className="language-skill-tile small-2 medium-4 large-4 columns">
      <img src={props.icon} width='100' height='150'/>
    </div>
  )
}

export default LanguageTile;
