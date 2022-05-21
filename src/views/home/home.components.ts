import styled from "styled-components";
import { Card as AntCard, Button } from "antd";

export const HomeContainer = styled.div`
  position: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - (2 * 155px));
  height: calc(100vh - (2 * 100px));
  margin: 50px;
  background-image: url("https://wallup.net/wp-content/uploads/2016/07/20/26560-Beaker.jpg");
  background-size: calc(100vw - (2 * 35px)) calc(100vh - (2 * 25px));
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const HeaderWrapper = styled.div`
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica, Arial, Sans-Serif;
  color: white;
  padding-bottom: 125px;
  padding-top: 20px;
`;

export const TextWrapper = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: Helvetica, Arial, Sans-Serif;
  color: white;
  padding-bottom: 25px;
  padding-left: 80px;
  padding-top: 20px;
`;

// @media screen and (min-device-width: 400px) {
//     body {
//       background-image: url('img_flowers.jpg');
//     }
//   }
