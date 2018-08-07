import React from "react";
import { Container, Image, Grid } from "semantic-ui-react";
import headshot from "../images/josh.jpg";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Grid stackable centered columns={2}>
          <Grid.Column width={4}>
            <Image src={headshot} size="medium" circular centered />
          </Grid.Column>
          <Grid.Column width={12}>
            <div style={{ fontSize: "18px" }}>
              <h2>About Me</h2>
              <p>
                I'm a full stack web developer based in Washington, D.C.,
                proficient in React, Redux, JavaScript, and Ruby on Rails. As a
                digital fundraiser for many years, I discovered a passion for
                user experience and tackling hard technical problems.<br />
                <br />
                Eventually, I became tired of paying developers to address the
                fun challenges I wanted to solve. I decided to learn how to code
                myself and fell in love with web development at Flatiron School.
                <br />
                <br />
                I bring strong communications skills, managerial experience, and
                a desire to make the world a better place through technology.
                Let's talk!
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Home;
