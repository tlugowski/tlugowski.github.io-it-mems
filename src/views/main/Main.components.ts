import logo from "./../../images/logo.png";
import styled from "styled-components";

import { Layout } from "antd";
const { Sider } = Layout;

export const Container = styled.div`
  & .logo {
    float: left;
    width: 140px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background-image: url(${logo});
    background-repeat: no-repeat;
  }
`;

export const MainSider = styled(Sider)`
  background-color: white;
`;
