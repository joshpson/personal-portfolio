import React from "react";
import {
  Container,
  Menu,
  Image,
  Dropdown,
  Divider,
  Header,
  Icon
} from "semantic-ui-react";
import headshot from "./images/josh.jpg";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      active: name
    });
    this.props.history.push(name);
  };

  render() {
    return (
      <div>
        <Menu pointing secondary stackable size="massive">
          <Menu.Item onClick={this.handleItemClick} name="/">
            <span style={{ color: "#228fcf", fontSize: "40px" }}>
              Josh Pearson
            </span>
          </Menu.Item>
          <Menu.Menu position="right" pointing>
            <Menu.Item
              onClick={this.handleItemClick}
              name="portfolio"
              active={this.state.active === "portfolio"}
              style={{ color: "#228fcf" }}
            >
              Portfolio
            </Menu.Item>
            <Menu.Item
              onClick={this.handleItemClick}
              name="blog"
              active={this.state.active === "blog"}
              style={{ color: "#228fcf" }}
            >
              Blog
            </Menu.Item>
            <Dropdown item text="Contact" style={{ color: "#228fcf" }}>
              <Dropdown.Menu>
                <Dropdown.Item>
                  {" "}
                  <Header as="h3">
                    <a href="mailto:jpearson846@gmail.com" target="_blank">
                      <Icon size="big" name="mail" />jpearson846@gmail.com
                    </a>
                  </Header>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Header as="h3">
                    <a
                      href="https://www.linkedin.com/in/joshpson/"
                      target="_blank"
                    >
                      <Icon size="big" name="linkedin" />/joshpson
                    </a>
                  </Header>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Header as="h3">
                    <a href="https://github.com/joshpson" target="_blank">
                      <Icon size="big" name="github" />/joshpson
                    </a>
                  </Header>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Nav;
