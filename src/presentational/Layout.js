import React from "react";
import {
 
  Header,
  Image,
  List,
  Segment,
  Label,
  Responsive
} from "semantic-ui-react";
import  BreakContainer  from "../container/Break";
import  ClockContainer  from "../container/Clock";
import  ControlsContainer  from "../container/Controls";
import  SesionContainer  from "../container/Sesion";

export const Layout = () => (
  <Responsive className="App">
    <Segment>
     <Header as='h1'> Pomodoro Clock </Header>
      <Segment.Group>
        <Segment>
          <Segment.Group horizontal>
            <BreakContainer />
            <ClockContainer />
            <SesionContainer />
          </Segment.Group>
        </Segment>
        <ControlsContainer />
      </Segment.Group>
    </Segment>
  </Responsive>
);
