import React, { Component } from 'react';
import axios from "axios"
import { Card, Image } from "semantic-ui-react"
import { Container, } from "semantic-ui-react"
import ContactForm from './ContactForm'

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cv: [],
      password: 'gin',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  componentDidMount() {
    axios.get("./data/cv.json").then((response) => {
        this.setState({ cv: response.data });
    });
}
  
  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const { cv } = this.state;

    const login = (
      <form className="cv-form" action="#" onSubmit={this.authorize}>
       <img className="cv-img" alt="gin" src="https://images.unsplash.com/photo-1484132286360-7669bdb39f3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"/>
       <input type="password" placeholder="Hint: can look at Img alt attribute"/>
        <input type="submit" />
      </form>
    );

    const cvCard = (
      <Card>
          <Image src={cv.image} wrapped ui={false} />
          <Card.Content>
              <Card.Header>{cv.name}</Card.Header>
              <Card.Description>{cv.experience}</Card.Description>
              <Card.Description>{cv.education}</Card.Description>
          </Card.Content>
      </Card>
    );

    return (
      <div id="authorization">
        <Container>
          
          <h1>{this.state.authorized ? 'Well done' : "what's my 5 o'clock posion?"}</h1>
          {this.state.authorized ? cvCard : login}
          
        </Container>
        <ContactForm />
      </div>
    );
  }
}

export default CV