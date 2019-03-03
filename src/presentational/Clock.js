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

export const Clock = ({minutes, seconds, name}) => (
    <Segment> 
      <Header as='h3'>{name}</Header>
      <span>{minutes} : {seconds}</span>
     
    </Segment>
);