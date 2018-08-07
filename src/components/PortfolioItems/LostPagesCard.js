import React from "react";
import pageImage from "../../images/lostpages.png";
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

class LostPagesCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Image
          href="https://hungrytrips-pearson.netlify.com/"
          src={pageImage}
        />
        <Card.Content>
          <Card.Header href="https://hungrytrips-pearson.netlify.com/">
            LostPages
          </Card.Header>
          <Card.Description>
            Single page application using Ruby on Rails, React, and Semantic UI.<br />
            <br />Users can find the top rated restraunts for upcoming travel.
            This app utilizes the Mapbox, Wikipedia, and Yelp APIs.<br />
            <br />
            username: demo@demo.com<br />
            pw: demo<br />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/joshpson/portfolio-tripapp-frontend">
            <Icon name="github" />Github
          </a>
          {" - "}
          <a href="https://hungrytrips-pearson.netlify.com/">
            <Icon name="external alternate" />Demo
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default LostPagesCard;
