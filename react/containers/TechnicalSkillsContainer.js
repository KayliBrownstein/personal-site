import React, { Component } from 'react';
import LanguageTile from '../components/LanguageTile';
import DatabaseTile from '../components/DatabaseTile';
import SoftwareTile from '../components/SoftwareTile';

const TechnicalSkillsContainer = props => {
  const LANGUAGES = [
    {
      "name": "HTML",
      "icon": 'html-logo.png'
    },
    {
      "name": "CSS",
      "icon": 'css-logo.png'
    },
    {
      "name": "Javascript",
      "icon": 'javascript-logo.png'
    },
    {
      "name": "Ruby",
      "icon": 'ruby-logo.png'
    }
  ]

  const DATABASES = [
    {
      "name": "SQL",
      "icon": 'sql-logo.png'
    },
    {
      "name": "PostgreSQL",
      "icon": 'postgresql-logo.png'
    }
  ]

  const SOFTWARE = [
    {
      "name": "Rails",
      "icon": 'ror-logo.png'
    },
    {
      "name": "ReactJS",
      "icon": 'react-logo.png'
    },
    {
      "name": "Sinatra",
      "icon": 'sinatra-logo.png'
    },
    {
      "name": "jQuery",
      "icon": 'jquery-logo.png'
    },
    {
      "name": "RSpec",
      "icon": 'rspec-logo.png'
    },
    {
      "name": "Capybara",
      "icon": 'capybara-logo.png'
    },
    {
      "name": "Sass",
      "icon": 'sass-logo.png'
    },
    {
      "name": "Foundation",
      "icon": 'foundation-logo.png'
    },
    {
      "name": "Heroku",
      "icon": 'heroku-logo.png'
    },
    {
      "name": "Git",
      "icon": 'git-logo.png'
    },
    {
      "name": "Github",
      "icon": 'github-icon.png'
    },
    {
      "name": "APIs",
      "icon": 'api-logo.png'
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
        <center><h3 id="resume-header">Technical Skills</h3></center>
        <div className="languages-container small-12 medium-4 large-4 columns">
        <h5 className="tech-skills-title">Languages</h5>
        {language_skills}
        </div>
        <div className="databases-container small-12 medium-4 large-4 columns">
        <h5 className="tech-skills-title">Databases</h5>
        {database_skills}
        </div>
        <div className="software-container small-12 medium-8 large-8 small-centered large-centered columns">
        <h5 className="tech-skills-title">Software/Tools/Frameworks</h5>
        {software_skills}
        </div>
      </div>
    )

}

export default TechnicalSkillsContainer;
