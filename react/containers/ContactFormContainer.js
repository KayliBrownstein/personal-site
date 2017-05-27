import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import SubjectField from '../components/SubjectField';
import BodyField from '../components/BodyField';
import { configureAnchors } from 'react-scrollable-anchor';

class ContactFormContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      subject: '',
      body: '',
      email: '',
      success: '',
      errors: {},
      apiError: ''
    };

    this.handleSubject = this.handleSubject.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleSubject(event){
    this.setState({ subject: event.target.value })
  }

  handleBody(event){
    this.validateBodyInput(event.target.value)
    this.setState({ body: event.target.value })
  }

  handleEmail(event){
    this.validateEmailInput(event.target.value)
    this.setState({ email: event.target.value })
  }

  clearForm(){
    this.setState({ subject: '', body: '', email: '' })
  }

  validateEmailInput(input){
    if (input === "" || input === " "){
      let newError = { emailError: "Please enter your email" }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.emailError
      this.setState({ errors: errorState })
      return true
    }
  }

  validateBodyInput(input){
    if (input === "" || input === " "){
      let newError = { bodyError: "Please enter a message" }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.bodyError
      this.setState({ errors: errorState })
      return true
    }
  }

  handleFormSubmit(event){
    event.preventDefault();
    if(this.validateEmailInput(this.state.email) && this.validateBodyInput(this.state.body)){
      let formPayload = {
        subject: this.state.subject,
        body: this.state.body,
        email: this.state.email
      }
      this.sendEmail(formPayload);
    }
  }

  sendEmail(formPayload){
    console.log(formPayload)
    fetch('/api/v1/contact', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      if(response.errors){
        let apiError
         = response.errors[0].message
        this.setState({ apiError: apiError, errors: {}, success: "" })
      } else {
        this.setState({ apiError: '', errors: {}, success: "Message sent! Thanks!" })
        this.clearForm();
      }
    })
  }

  render(){
    configureAnchors({ keepLastAnchorHash: true });
    let errorDiv;
    let errorItems;
    let successSpan

    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li className="error" key={error}>{error}</li>)
      })
      errorDiv = <div>{errorItems}</div>
    } else if (this.state.apiError != "") {
      errorDiv = <div className="error">{this.state.apiError}</div>
    }

    if(this.state.success != ''){
      successSpan = <span className="success">{this.state.success}</span>
    }


    return(
      <div className="contact-container small-12 large-6 large-centered columns">
        <ScrollableAnchor id={'contact-section'}>
          <div className="contact-anchor">
          </div>
        </ScrollableAnchor>
        <center><h1>Contact</h1>
        <div id='up-button'>
          <a href="#home"><i className="fa fa-chevron-up" aria-hidden="true"></i></a>
        </div></center>
        <form onSubmit={this.handleFormSubmit}>
          <SubjectField
            name='email'
            label='Email'
            id='email'
            placeholder='Your Email'
            content={this.state.email}
            handlerFunction={this.handleEmail}
            />
          <SubjectField
            name='subject'
            label='Subject'
            id='subject'
            placeholder='I would like to discuss...'
            content={this.state.subject}
            handlerFunction={this.handleSubject}
          />
          <BodyField
            name='body'
            label='Body'
            placeholder='I wanted to say...'
            content={this.state.body}
            handlerFunction={this.handleBody}
          />
          {errorDiv}
          <center><input className="submit-button button" type="submit" value="Send" /></center>
          {successSpan}
        </form>
      </div>
    );
  };
};

export default ContactFormContainer;
