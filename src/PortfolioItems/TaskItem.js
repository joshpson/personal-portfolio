import React from "react";
import taskImage from "../images/TaskAppImg.png";
import {
  Image,
  Segment,
  Container,
  Grid,
  Header,
  Button
} from "semantic-ui-react";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Column width={8}>
            <Header as="h1">Task Management App</Header>
            <p style={{ fontSize: "20px" }}>
              Single page application using Ruby on Rails, vanilla JavaScript
              and Material Design Lite.<br />
              <br />This app allows users to manage projects and corresponding
              tasks.<br />
              <br />
              You can create a new account with your email address or login with
              "demo" if you don't want to create an account. Demo account
              information is not saved to the database.
              <br />
              <br />
              <Button
                size="big"
                primary
                as="a"
                href="https://joshpson.github.io/portfolio-tasker-frontend/#"
                target="_blank"
              >
                Visit
              </Button>
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image
              as="a"
              href="https://joshpson.github.io/portfolio-tasker-frontend/#"
              target="_blank"
              src={taskImage}
              size="huge"
            />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default TaskItem;
