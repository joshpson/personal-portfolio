import React from "react";
import { Pagination, Container, Divider } from "semantic-ui-react";
import TaskItem from "./PortfolioItems/TaskItem";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "1"
    };
  }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target.innerText);
    this.setState({
      item: e.target.innerText
    });
  };

  activePage = page => {
    if (page === "1") {
      return <TaskItem />;
    }
  };

  render() {
    return (
      <div>
        {this.activePage(this.state.item)}
        <Container textAlign="center">
          <Divider horizontal />
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            onPageChange={this.handleChange}
            pointing
            secondary
            totalPages={3}
          />
        </Container>
      </div>
    );
  }
}

export default Portfolio;
