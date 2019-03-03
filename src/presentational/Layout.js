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
import  ProgresContainer from "../container/Progres";


export const Layout = () => (
  <Responsive className="App">
    <Segment>
     <Header as='h1'> Pomodoro Clock </Header>
          <Responsive as={Segment.Group} maxWidth={650}> 
            <BreakContainer />
            <ClockContainer />
            <SesionContainer />
          </Responsive>
          <Responsive as={Segment.Group} minWidth={651} horizontal>
            <BreakContainer />
            <ClockContainer />
            <SesionContainer />
          </Responsive>
        <ProgresContainer />
      <ControlsContainer />
    </Segment>
  </Responsive>
);
