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

export const Controls = ({ onClickReset, onClickStartPause}) => (
    <Segment>
      <Header as='h3'> Controls</Header>
     
       <Button onClick={onClickStartPause}> </Button>   {/* change to icons, start/pause, reset */}
       <Button onClick={onClickReset}></Button>
       </Segment>
);