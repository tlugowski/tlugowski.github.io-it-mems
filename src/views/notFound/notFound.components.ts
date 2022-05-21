import styled from "styled-components";
import { Card as AntCard, Button } from "antd";
// https://www.google.com/imgres?imgurl=https%3A%2F%2Fmanofmany.com%2Fwp-content%2Fuploads%2F2020%2F03%2F1503352499044-1.jpg&imgrefurl=https%3A%2F%2Fmanofmany.com%2Fentertainment%2Fart%2Ffunny-zoom-backgrounds&tbnid=Dtt0h7GReR2z0M&vet=12ahUKEwj97O3Uvuz3AhVP_SoKHWFdAAgQMyhHegQIARBq..i&docid=d7ZfGxhZmJ2paM&w=900&h=506&q=funny%20backgrounds%20free&ved=2ahUKEwj97O3Uvuz3AhVP_SoKHWFdAAgQMyhHegQIARBq#imgrc=GiT_JAMCj3RodM&imgdii=kSaPjz15dxlVyM
export const ContainerNotFound = styled.div`
  /* max-width: 2050px; */
  width: calc(100% - (2 * 50px));
  height: calc(100vh - (2 * 75px));
  margin: 50px;
  padding: 50px;
  background-image: url("https://manofmany.com/wp-content/uploads/2020/03/wallhaven-md18v9-1.jpg");

  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const TextWrapper = styled.div`
  /* position: flex;
  align-items: center;
  justify-content: center; */
  font-size: 72px;
  color: white;
  padding: 70px;
`;

// @media screen and (min-device-width: 400px) {
//     body {
//       background-image: url('img_flowers.jpg');
//     }
//   }
