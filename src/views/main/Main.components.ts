import styled from "styled-components";

import { Layout } from "antd";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

export const MainSider = styled(Sider)`
  background-color: white;
`;

export const LogoWrapper = styled(NavLink)`
  position: flex;
  font-family: system-ui;
  font-size: 24px;
  background-color: transparent;
  color: white;
  border-color: transparent;
`;
