import styled from "styled-components";
import { Card as AntCard, Button } from "antd";

export const ContainerMem = styled.div`
  width: calc(100% - (2 * 50px));
  margin: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  background-image: url("  https://static.wixstatic.com/media/10b930_a55b0e35ff6f445697bde8f1ea6813c4~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/10b930_a55b0e35ff6f445697bde8f1ea6813c4~mv2.jpg");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const Card = styled(AntCard)`
  margin: auto;
  width: 80%;
  max-width: 700px;
  border: 25px solid #40a9ff;
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
  padding-bottom: 25px;
`;

export const PositiveButton = styled.span`
  & button {
    background-color: green;
  }
`;

export const NegativeButton = styled.span`
  & button {
    background-color: red;
  }
`;

export const IsFavouriteWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 5px;
`;

export const FavouriteButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 25px;
`;
