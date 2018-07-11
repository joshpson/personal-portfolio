import React, { Component } from "react";
import { Container, Menu, Image, Dropdown } from "semantic-ui-react";

import headshot from "./images/josh.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Menu borderless>
          <Menu.Item header>Josh Pearson</Menu.Item>
          <Menu.Item as="a">Blog</Menu.Item>
          <Menu.Item as="a">Articles</Menu.Item>
        </Menu>
        <Image src={headshot} size="small" circular />
      </Container>
    );
  }
}

export default App;
