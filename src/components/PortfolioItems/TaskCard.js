import React from "react";
import taskImage from "../../images/TaskAppImg.png";
import {
  Image,
  Segment,
  Container,
  Grid,
  Header,
  Button,
  Card,
  Icon
} from "semantic-ui-react";

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Image
          href="https://joshpson.github.io/portfolio-tasker-frontend/"
          src={taskImage}
        />
        <Card.Content>
          <Card.Header href="https://joshpson.github.io/portfolio-tasker-frontend/">
            Taskr
          </Card.Header>
          <Card.Description>
            Single page application using Ruby on Rails, vanilla JavaScript and
            Material Design Lite.<br />
            <br />This app allows users to manage projects and corresponding
            tasks with drag and drop functionality.<br />
            <br />
            username: demo
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/joshpson/portfolio-tasker-frontend">
            <Icon name="github" />Github
          </a>
          {" - "}
          <a href="https://joshpson.github.io/portfolio-tasker-frontend/">
            <Icon name="external alternate" />Demo
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default TaskCard;
