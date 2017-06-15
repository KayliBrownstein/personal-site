import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';
import SwansonTile from '../components/SwansonTile';

class SwansonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: ''
    }
  }

componentDidMount(){
  fetch("/api/v1/quotes")
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({quote: responseData.quote})
    })
}

  render(){
    return(
      <div className="row collapse">
        <div className="resume-container small-12 medium-12 large-12 columns">
          <ScrollableAnchor id={'resume-section'}>
            <div className="resume-anchor">
            </div>
          </ScrollableAnchor>
          <div id="color-strip">
          <center><h1>Swansonator</h1>
          <button id="fa-up-arrow" onClick={goToTop}>
            <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
          </button></center>
          </div>
          <SwansonTile 
            quote={this.state.quote}
          /> 
        </div>
      </div>
    )
  }
}

export default SwansonContainer;