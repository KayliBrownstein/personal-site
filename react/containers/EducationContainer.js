import React, { Component } from 'react';
import EducationTile from '../components/EducationTile';

class EducationContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      education: []
    }
  }

  componentDidMount(){
  fetch("/api/v1/education")
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({education: responseData})
    })
  }

  render(){
    let education = this.state.education.map((education) => {
      return(
        <EducationTile
          name={education.name}
          location={education.location}
          dates={education.dates}
          degree={education.degree}
          study={education.study}
        />
      )
    })
    
    return(
      <div className="education-container small-12 medium-12 large-10 medium-centered large-centered columns">
        <center><h3 id="resume-header">Education</h3></center>
        {education}
      </div>
    )
  }
}

export default EducationContainer;
