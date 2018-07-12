import React, { Component } from "react";
import {
  Container,
  Menu,
  Image,
  Dropdown,
  Grid,
  Segment
} from "semantic-ui-react";
import { Switch, Route, withRouter } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Nav history={this.props.history} />
        <Grid columns="equal">
          <Grid.Column />
          <Grid.Column width={10}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </Container>
    );
  }
}

export default withRouter(App);
