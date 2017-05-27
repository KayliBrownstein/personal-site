import React, { Component } from 'react';
import ProfExTile from '../components/ProfExTile';

const ProfessionalExperienceContainer = props =>  {
  const PROFEX = [
    {
      "name": "Launch Academy",
      "location": "Boston, MA",
      "dates": "March '17 - May '17",
      "title": "Apprentice Full Stack Developer"
    },
    {
      "name": "Brill USA",
      "location": "Boston, MA",
      "dates": "August '16 - February '17",
      "title": "Project Manager"
    },
    {
      "name": "Vista Higher Learning",
      "location": "Boston, MA",
      "dates": "July '16 - August '16",
      "title": "Associate Project Manager"
    },
    {
      "name": "Vista Higher Learning",
      "location": "Boston, MA",
      "dates": "January '15 - June '16",
      "title": "Project Assistant"
    },
    {
      "name": "Vista Higher Learning",
      "location": "Boston, MA",
      "dates": "January '14 - December '14",
      "title": "Editorial Intern—Secondary Ed"
    }
  ]

  let profex = PROFEX.map((profex) => {
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
      <div className="profex-container small-12 medium-8 large-8 large-centered columns">
        <h3>Professional Experience</h3>
        {profex}
      </div>
    )
}

export default ProfessionalExperienceContainer;
