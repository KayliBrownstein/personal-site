import React, { Component } from 'react';
import Navbar from './Navbar';
import Body from './Body';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Navbar />
        <Body />
      </div>
    )
  }
}

export default App;
