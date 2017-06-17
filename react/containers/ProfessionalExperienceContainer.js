import React, { Component } from 'react';
import ProfExTile from '../components/ProfExTile';

class ProfessionalExperienceContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      profex: []
    }
  }

  componentDidMount(){
  fetch("/api/v1/profex")
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({profex: responseData})
    })
  }

  render(){
    let profex = this.state.profex.map((profex) => {
      return(
        <ProfExTile
          name={profex.name}
          location={profex.location}
          dates={profex.dates}
          title={profex.title}
        />
      )
    })

    return(
      <div className="profex-container small-12 medium-8 large-8 medium-centered large-centered columns">
        <center><h3 id="resume-header">Professional Experience</h3></center>
        {profex}
      </div>
    )
  }
}

export default ProfessionalExperienceContainer;
