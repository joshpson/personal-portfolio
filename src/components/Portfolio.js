import React from "react";
import { Container, Divider, Card } from "semantic-ui-react";
import TaskCard from "./PortfolioItems/TaskCard";
import WeatherCard from "./PortfolioItems/WeatherCard";
import HungryTripCard from "./PortfolioItems/HungryTripCard";
import LostPagesCard from "./PortfolioItems/LostPagesCard";

class Portfolio extends React.Component {
  itemsCount = size => {
    if (size > 1000) {
      return 4;
    } else if (size > 767) {
      return 2;
    } else {
      return 1;
    }
  };

  render() {
    return (
      <Container>
        <Divider horizontal />
        <Card.Group itemsPerRow={this.itemsCount(this.props.window)}>
          <WeatherCard />
          <TaskCard />
          <HungryTripCard />
          <LostPagesCard />
        </Card.Group>
      </Container>
    );
  }
}

export default Portfolio;
