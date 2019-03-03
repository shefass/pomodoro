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

export const Sesion = ({length, onClickDecrease, onClickIncrease }) => (
    <Segment> 
      <Header as='h3'>Sesion Length</Header>
      <Button onClick={onClickDecrease}>Decrease</Button>
      <span>{length}</span>
      <Button onClick={onClickIncrease}>Increase</Button>
      
      
       </Segment>
);