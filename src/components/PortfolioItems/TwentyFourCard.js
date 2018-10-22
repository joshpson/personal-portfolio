import React from "react";
import preview from "../../images/2048.png";
import { Image, Card, Icon } from "semantic-ui-react";

class TwentyFour extends React.Component {
  render() {
    return (
      <Card>
        <Image
          href="https://pearson-2048.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          src={preview}
        />
        <Card.Content>
          <Card.Header
            href="https://pearson-2048.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2048
          </Card.Header>
          <Card.Description>
            A clone of one of my favorite games, 2048. The goal is to add up
            blocks until you reach 2048 by using the arrow keys. Once you can no
            longer move any blocks, you lose. <br />
            <br />This project was built with JavaScript & Sass using webpack
            and babel.
            <br />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a
            href="https://github.com/joshpson/2048/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" />Github
          </a>
          {" - "}
          <a
            href="https://pearson-2048.netlify.com/"
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

export default TwentyFour;
