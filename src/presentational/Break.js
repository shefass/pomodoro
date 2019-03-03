import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Label,
  Responsive
} from "semantic-ui-react";

export const Break = ({length, onClickDecrease, onClickIncrease }) => (
    <Segment>
      <Header as='h3'>Break Length</Header>
      <Button onClick={onClickDecrease}>Decrease</Button>
      <span>{length}</span>
      <Button onClick={onClickIncrease}>Increase</Button>
      
    </Segment>
);