import React from "react";
import {
  Container,
  Menu,
  Image,
  Dropdown,
  Divider,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container text>
        <Header as="h2">
          <a
            href="https://medium.com/@josh.j.pearson/dynamically-created-draggable-items-e265ff979008"
            target="_blank"
          >
            Dynamically Created Draggable Items
          </a>
        </Header>
        <p>
          Dragging and dropping items on the screen is a fun user experience
          that is surprisingly easy to implement. For this post I’ll show you
          how to create lists and list items dynamically that can be moved
          around on the page...
        </p>
        <Header as="h2">
          <a
            href="https://medium.com/@josh.j.pearson/regular-expressions-101-f1ce78fc120b"
            target="_blank"
          >
            Regular Expression 101
          </a>
        </Header>
        <p>
          Regular expression, or regex, is a formal language that can describe a
          set of strings. It’s used by searching algorithms to find and perform
          operations on strings. It was invented by Stephen Cole Kleene in the
          1950’s. Most programming languages now provide regex capabilities
          either natively or through libraries...
        </p>
        <Header as="h2">
          <a
            href="https://medium.com/@josh.j.pearson/creating-a-simple-search-form-in-rails-28008514d5a2"
            target="_blank"
          >
            Creating a Simple Search Form in Rails
          </a>
        </Header>
        <p>
          Today I’m going to show you how to implement a basic search form in
          rails. Let’s start with a simple data model for a blog post site. We
          have posts with a title and content..
        </p>
        <Header as="h2">
          <a
            href="https://medium.com/@josh.j.pearson/learning-active-record-through-excel-fa746cb6e8e8"
            target="_blank"
          >
            Learning Active Record Queries With Excel
          </a>
        </Header>
        <p>
          Before I started my career in web development I spent years analyzing
          data in excel as a digital marketer. Now that I’m learning to code,
          I’m constantly seeing parallels between excel formulas and the
          formulas I’m using in Ruby and other languages...
        </p>
      </Container>
    );
  }
}

export default Blog;
