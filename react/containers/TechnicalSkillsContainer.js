import React, { Component } from 'react';
import LanguageTile from '../components/LanguageTile';
import DatabaseTile from '../components/DatabaseTile';
import SoftwareTile from '../components/SoftwareTile';

const TechnicalSkillsContainer = props => {
  const LANGUAGES = [
    {
      "name": "HTML",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "CSS",
      "icon": <i className="fa fa-css3 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Javascript",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Ruby",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    }
  ]

  const DATABASES = [
    {
      "name": "SQL",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "PostgreSQL",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    }
  ]

  const SOFTWARE = [
    {
      "name": "Rails",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "ReactJS",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Sinatra",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "jQuery",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "RSpec",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Capybara",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Sass",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Foundation",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Heroku",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Git",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "Github",
      "icon": 'github-icon.png',
    },
    {
      "name": "APIs",
      "icon": <i className="fa fa-html5 fa-4x" aria-hidden="true"></i>
    },
    {
      "name": "JIRA",
      "icon": 'jira-icon.png'
    }
  ]

      let language_skills = LANGUAGES.map((language) => {
        return(
          <LanguageTile
            language={language.name}
            icon={language.icon}
          />
        )
      })
      let database_skills = DATABASES.map((database) => {
        return(
          <DatabaseTile
            database={database.name}
            icon={database.icon}
          />
        )
      })
      let software_skills = SOFTWARE.map((software) => {
        return(
          <SoftwareTile
            software={software.name}
            icon={software.icon}
          />
        )
      })

      return(
      <div className="tech-skills-container small-12 medium-12 large-12 columns">
        <h3>Technical Skills</h3>
        <div className="small-12 medium-12 large-12 columns">
        <h5>Languages</h5>
        {language_skills}
        </div>
        <div className="small-12 medium-12 large-12 columns">
        <h5>Databases</h5>
        {database_skills}
        </div>
        <div className="small-12 medium-12 large-12 columns">
        <h5>Software/Tools/Frameworks</h5>
        {software_skills}
        </div>
      </div>
    )

}

export default TechnicalSkillsContainer;
