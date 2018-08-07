import React from "react";
import taskImage from "../../images/TaskAppImg.png";
import { Image, Card, Icon } from "semantic-ui-react";

class TaskCard extends React.Component {
  render() {
    return (
      <Card>
        <Image
          href="https://joshpson.github.io/portfolio-tasker-frontend/"
          target="_blank"
          rel="noopener noreferrer"
          src={taskImage}
        />
        <Card.Content>
          <Card.Header
            href="https://joshpson.github.io/portfolio-tasker-frontend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Taskr
          </Card.Header>
          <Card.Description>
            Single page application built using Ruby on Rails, vanilla
            JavaScript and Material Design Lite.<br />
            <br />This app allows users to manage projects and corresponding
            tasks with drag and drop functionality.<br />
            <br />
            username: demo
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a
            href="https://github.com/joshpson/portfolio-tasker-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" />Github
          </a>
          {" - "}
          <a
            href="https://joshpson.github.io/portfolio-tasker-frontend/"
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

export default TaskCard;
