import React, { Component } from "react";
import { Container, Menu, Image, Dropdown } from "semantic-ui-react";

import Nav from "./Nav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="app-background">
        <Nav />
      </Container>
    );
  }
}

export default App;
