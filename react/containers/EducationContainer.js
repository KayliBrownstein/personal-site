import React, { Component } from 'react';
import EducationTile from '../components/EducationTile';

const EducationContainer = props =>  {
  const EDUCATION = [
    {
      "name": "Boston College",
      "location": "Chestnut Hill, MA",
      "dates": "September '11 - May '15",
      "study": "B.A. English, French"
    },
    {
      "name": "La Sorbonne, Paris IV",
      "location": "Paris, France",
      "dates": "August '13 - December '13",
      "study": "French Literature"
    }
  ]

  let education = EDUCATION.map((education) => {
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
      <div className="education-container small-12 medium-10 large-10 large-centered columns">
        <h3>Education</h3>
        {education}
      </div>
    )
}

export default EducationContainer;
