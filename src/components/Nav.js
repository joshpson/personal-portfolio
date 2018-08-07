import React from "react";
import { Menu, Dropdown, Header, Icon } from "semantic-ui-react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      visible: false,
      caret: true
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      active: name,
      visible: false,
      caret: true
    });
    this.props.history.push(name);
  };

  mobileMenu = () => {
    this.setState({
      visible: !this.state.visible,
      caret: !this.state.caret
    });
  };

  render() {
    return (
      <div>
        <Menu secondary stackable size="massive">
          {this.props.window > 767 ? (
            <Menu.Item onClick={this.handleItemClick} name="/">
              <span style={{ color: "#228fcf", fontSize: "40px" }}>
                Josh Pearson
              </span>
            </Menu.Item>
          ) : (
            <Menu.Item onClick={this.mobileMenu}>
              <span style={{ color: "#228fcf", fontSize: "40px" }}>
                Josh Pearson
              </span>{" "}
              <Icon
                name={this.state.caret ? "caret down" : "caret up"}
                style={{ color: "#228fcf", fontSize: "30px" }}
              />
            </Menu.Item>
          )}
          {this.state.visible || this.props.window > 767 ? (
            <Menu.Menu position="right">
              {this.props.window < 767 ? (
                <Menu.Item
                  onClick={this.handleItemClick}
                  name="/"
                  style={{ color: "#228fcf" }}
                >
                  Home
                </Menu.Item>
              ) : null}
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
                      <a
                        href="mailto:jpearson846@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size="big" name="mail" />jpearson846@gmail.com
                      </a>
                    </Header>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Header as="h3">
                      <a
                        href="https://www.linkedin.com/in/joshpson/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size="big" name="linkedin" />/joshpson
                      </a>
                    </Header>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Header as="h3">
                      <a
                        href="https://github.com/joshpson"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size="big" name="github" />/joshpson
                      </a>
                    </Header>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          ) : null}
        </Menu>
      </div>
    );
  }
}

export default Nav;
