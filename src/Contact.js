import React from "react";
import { Container, Segment, Icon, Divider, Header } from "semantic-ui-react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container text>
        <Divider horizontal />
        <div>
          <Header as="h3">
            <a href="mailto:jpearson846@gmail.com" target="_blank">
              <Icon size="big" name="mail" />jpearson846@gmail.com
            </a>
          </Header>
          <Header as="h3">
            <a href="https://www.linkedin.com/in/joshpson/" target="_blank">
              <Icon size="big" name="linkedin" />/joshpson
            </a>
          </Header>

          <Header as="h3">
            <a href="https://github.com/joshpson" target="_blank">
              <Icon size="big" name="github" />/joshpson
            </a>
          </Header>
        </div>
      </Container>
    );
  }
}

export default Contact;
