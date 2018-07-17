import React, { Component } from "react";
import {
  Container,
  Menu,
  Image,
  Dropdown,
  Grid,
  Segment,
  Icon,
  Divider
} from "semantic-ui-react";
import { Switch, Route, withRouter } from "react-router-dom";

import Nav from "./Nav";
import Blog from "./Blog";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav history={this.props.history} />
        <Container>
          <Grid columns="equal">
            <Grid.Column>
              <Divider horizontal />
              <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route path="/blog" component={Blog} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
              <Divider horizontal />
              <Divider horizontal />
            </Grid.Column>
          </Grid>
          <Container textAlign="center">
            <Divider horizontal />
            <div>
              <a href="https://www.linkedin.com/in/joshpson/" target="_blank">
                <Icon size="big" name="linkedin" />
              </a>
              <a href="https://github.com/joshpson" target="_blank">
                <Icon size="big" name="github" />
              </a>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
