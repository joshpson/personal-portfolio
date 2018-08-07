import React from "react";
import pageImage from "../../images/lostpages.png";
import { Image, Card, Icon } from "semantic-ui-react";

class LostPagesCard extends React.Component {
  render() {
    return (
      <Card>
        <Image
          href="https://lostpages-pearson.herokuapp.com/"
          src={pageImage}
          target="_blank"
          rel="noopener noreferrer"
        />
        <Card.Content>
          <Card.Header
            href="https://lostpages-pearson.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LostPages
          </Card.Header>
          <Card.Description>
            Social network for lending and borrowing books from your friends.<br />
            <br />
            Built with Rails, Bootstrap and Google's book API. Leverages
            Omniauth for Facebook sign-in.<br />
            <br />
            username: demo@demo.com<br />
            pw: demo<br />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a
            href="https://github.com/joshpson/portfolio-lostpages"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" />Github
          </a>
          {" - "}
          <a
            href="https://lostpages-pearson.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="external alternate" />Demo
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default LostPagesCard;
