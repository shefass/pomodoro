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
  Responsive,
  Progress
} from "semantic-ui-react";

export const Progres = ({procent}) => (
    <Progress percent={procent} indicating />
); 