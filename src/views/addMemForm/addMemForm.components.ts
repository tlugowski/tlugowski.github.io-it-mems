import styled from "styled-components";
import { Card as AntCard, Button, Input, Form } from "antd";

export const JustifyCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerAddMem = styled.div`
  width: calc(100% - (2 * 50px));
  height: calc(100vh - (2 * 75px));
  margin: 50px;
  padding: 50px;
  background-image: url("https://i.pinimg.com/originals/75/e1/1d/75e11d51f947cfb8cec96488c599cfc0.png");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const SectionWrapper = styled(JustifyCenter)`
  width: 100%;
  flex-direction: column;
`;

export const LabelWrapper = styled.label`
  max-width: 550px;
  width: 90%;
  font-size: 20px;
  margin: 0 10px;
  color: white;
`;

export const InputWrapper = styled(Input)`
  margin: 10px;
  width: 90%;
  max-width: 525px;
`;

export const HeaderWrapper = styled(JustifyCenter)`
  font-size: 48px;
  font-family: Helvetica, Arial, Sans-Serif;
  color: white;
  padding-bottom: 25px;
`;

export const NotificationWrapper = styled.span`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica, Arial, Sans-Serif;
  color: white;
  padding-bottom: 25px;
`;

export const FormAddMem = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardAddMem = styled(AntCard)`
  margin: auto;
  width: 80%;
  max-width: 700px;
  border: 25px solid #40a9ff;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const SendContainer = styled.div`
  width: calc(100% - (2 * 20px));
  margin: 20px;
  display: flex;
  justify-content: center;
`;

export const SendButton = styled(Button)`
  width: 25%;
  min-width: 100px;
`;
