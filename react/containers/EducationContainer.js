import React, { Component } from 'react';
import EducationTile from '../components/EducationTile';

const EducationContainer = props =>  {
  const EDUCATION = [
    {
      "name": "Boston College",
      "location": "Chestnut Hill, MA",
      "dates": "September 2011 - May 2015",
      "study": "B.A. English, French"
    },
    {
      "name": "La Sorbonne, Paris IV",
      "location": "Paris, France",
      "dates": "August 2013 - December 2013",
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
      <div className="education-container small-12 medium-12 large-12 columns">
        <h3>Education</h3>
        {education}
      </div>
    )
}

export default EducationContainer;
