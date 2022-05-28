import styled from "styled-components";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { Content, Header } from "antd/lib/layout/layout";
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

export const MenuWrapper = styled(Menu)`
  width: 200px;

  @media (max-width: 768px) {
    & .ant-menu-item {
      width: 78px;
    }
  }
`;

export const CustomContent = styled(Content)`
  width: calc(100vw - 200px);
  margin-left: 200px;

  @media (max-width: 768px) {
    width: calc(100vw - 78px);
    margin-left: 78px;
  }
`;

export const SiderWrapper = styled(MainSider)`
  position: fixed;
  margin-top: 64px;
  height: calc(100vh - 64px);
`;

export const CustomHeader = styled(Header)`
  z-index: 1;
  position: fixed;
  width: 100%;
`;
