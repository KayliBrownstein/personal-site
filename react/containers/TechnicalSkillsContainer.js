import React, { Component } from 'react';
import LanguageTile from '../components/LanguageTile';
import DatabaseTile from '../components/DatabaseTile';
import SoftwareTile from '../components/SoftwareTile';

class TechnicalSkillsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      languages: [],
      databases: [],
      software: []
    }
    this.getLanguages = this.getLanguages.bind(this);
    this.getDatabases = this.getDatabases.bind(this);
    this.getSoftware = this.getSoftware.bind(this);
  }

  componentDidMount(){
    this.getLanguages();
    this.getDatabases();
    this.getSoftware();
  }

  getLanguages(){
    fetch("/api/v1/languages")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          languages: responseData
        });
      })
  }
    
  getDatabases(){
    fetch("/api/v1/databases")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          databases: responseData
        });
      })
  }
  
  getSoftware(){
    fetch("/api/v1/software")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          software: responseData
        });
      })
  }

  render(){
      let language_skills = this.state.languages.map((language) => {
        return(
          <LanguageTile
            language={language.name}
            icon={language.icon}
          />
        )
      })
      let database_skills = this.state.databases.map((database) => {
        return(
          <DatabaseTile
            database={database.name}
            icon={database.icon}
          />
        )
      })
      let software_skills = this.state.software.map((software) => {
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
}

export default TechnicalSkillsContainer;
