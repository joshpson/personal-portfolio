import React from "react";
import weatherImage from "../../images/weather.png";
import { Image, Card, Icon } from "semantic-ui-react";

class WeatherCard extends React.Component {
  render() {
    return (
      <Card>
        <Image
          href="https://freshair-pearson.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          src={weatherImage}
        />
        <Card.Content>
          <Card.Header
            href="https://freshair-pearson.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FreshAir
          </Card.Header>
          <Card.Description>
            Single page application built using Ruby on Rails, React, Redux and
            Bootstrap.<br />
            <br />Users can save multiple locations and see real-time weather
            information. This app utilizes the Google Places and Dark Sky APIs.
            <br />
            <br />
            username: demo@demo.com<br />
            pw: demo<br />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a
            href="https://github.com/joshpson/portfolio-weatherapp-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" />Github
          </a>
          {" - "}
          <a
            href="https://freshair-pearson.netlify.com/"
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

export default WeatherCard;
