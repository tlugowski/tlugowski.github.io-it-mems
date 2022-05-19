import styled from "styled-components";
import { Card as AntCard, Button } from "antd";

export const ContainerMem = styled.div`
  width: 100%;
  margin: 50px;

  /* @media only screen and (min-device-width: 400px) {
  body {
    background-image: url('img_flowers.jpg');
  }
} */
`;

export const Card = styled(AntCard)`
  margin: auto;
  width: 80%;
  max-width: 700px;
`;

export const VoteContainer = styled.div`
  width: calc(100% - (2 * 20px));
  margin: 20px;
`;

export const VoteButton = styled(Button)`
  width: 50%;
`;

export const RateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// @media screen and (min-device-width: 400px) {
//     body {
//       background-image: url('img_flowers.jpg');
//     }
//   }
