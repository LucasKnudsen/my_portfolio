import React, { Component } from 'react';
import axios from "axios"
import { Card, Image } from "semantic-ui-react"

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
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password"/>
        <input type="submit" />
      </form>
    );

    const cvCard = (
      <Card>
          <Image src={this.cv.image} wrapped ui={false} />
          <Card.Content>
              <Card.Header>{this.cv.name}</Card.Header>
              <Card.Description>{this.cv.description}</Card.Description>
          </Card.Content>
      </Card>
    );

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
        {this.state.authorized ? cvCard : login}
      </div>
    );
  }
}

export default CV