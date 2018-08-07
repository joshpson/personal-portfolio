import React, { Component } from "react";
import { Container, Grid, Icon, Divider } from "semantic-ui-react";
import { Switch, Route, withRouter } from "react-router-dom";
import debounce from "lodash/debounce";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: null
    };
  }

  componentDidMount() {
    this.setState({
      windowSize: window.innerWidth
    });
    window.addEventListener(
      "resize",
      debounce(() => {
        this.setState({
          windowSize: window.innerWidth
        });
      }, 100)
    );
  }

  render() {
    return (
      <div>
        <Container>
          <Nav history={this.props.history} window={this.state.windowSize} />
          <Grid columns="equal">
            <Grid.Column>
              <Divider horizontal />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route
                  path="/portfolio"
                  render={() => <Portfolio window={this.state.windowSize} />}
                />
              </Switch>
              <Divider horizontal />
              <Divider horizontal />
            </Grid.Column>
          </Grid>
          <Container textAlign="center">
            <Divider horizontal />
            <div>
              <a
                href="https://www.linkedin.com/in/joshpson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size="big" name="linkedin" />
              </a>
              <a
                href="https://github.com/joshpson"
                target="_blank"
                rel="noopener noreferrer"
              >
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
