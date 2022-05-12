import styled from "styled-components";
import { Card as AntCard, Button } from "antd";

export const ContainerMem = styled.div`
  width: 100%;
  margin: 50px;
`;

export const Card = styled(AntCard)`
  margin: auto;
  width: 80%;
  max-width: 700px;
`;

export const VoteContainer = styled.div`
  width: calc(100% - (2*20px));
  margin: 20px;
`;

export const VoteButton = styled(Button)`
  width: 50%;
`;
