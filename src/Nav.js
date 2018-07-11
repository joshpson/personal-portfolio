import React from "react";
import {
  Container,
  Menu,
  Image,
  Dropdown,
  Divider,
  Header
} from "semantic-ui-react";
import headshot from "./images/josh.jpg";
class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu secondary stackable size="massive">
          <Menu.Item>
            <Image src={headshot} size="tiny" circular />
          </Menu.Item>
          <Menu.Item>
            <Header as="h1">Josh Pearson</Header>
          </Menu.Item>
          <Menu.Menu position="right" pointing>
            <Menu.Item
              name="projects"
              active={true}
              onClick={this.handleItemClick}
            >
              Projects
            </Menu.Item>
            <Menu.Item name="blog" onClick={this.handleItemClick}>
              Blog
            </Menu.Item>
            <Menu.Item name="contact" onClick={this.handleItemClick}>
              Contact
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Nav;
