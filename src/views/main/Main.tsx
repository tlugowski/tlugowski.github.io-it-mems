import React, { useMemo } from "react";
import { SelectEventHandler } from "rc-menu/lib/interface";
import "antd/dist/antd.css";

import { LogoWrapper } from "./Main.components";
import { Layout, Menu } from "antd";
import {
  LineChartOutlined,
  RiseOutlined,
  PlusCircleOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { Outlet, useNavigate } from "react-router-dom";
import { MainSider } from "./Main.components";
import styled from "styled-components";
import useWindowDimensions from "../../hooks/WindowSize";

const menuElements: ItemType[] = [
  {
    key: "favourites",
    label: "Favourites",
    icon: <HeartOutlined />,
  },
  {
    key: "hot",
    label: "Hot",
    icon: <RiseOutlined />,
  },
  {
    key: "regular",
    label: "Regular",
    icon: <LineChartOutlined />,
  },
  {
    key: "add-mem",
    label: "Add mems",
    icon: <PlusCircleOutlined />,
  },
];

const { Header, Content } = Layout;

const Main: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const isCollapsed = useMemo<boolean>(() => width <= 768, [width]);

  const onMenuChange: SelectEventHandler = (info) => {
    const routeName: string = info.key;
    navigate(`/${routeName}`);
  };

  return (
    <Layout>
      <CustomHeader>
        <LogoWrapper className="logo" to="/home">
          IT ME👀MS
        </LogoWrapper>
      </CustomHeader>
      <Layout>
        <SiderWrapper collapsed={isCollapsed}>
          <MenuWrapper
            onSelect={onMenuChange}
            mode="inline"
            items={menuElements}
          />
        </SiderWrapper>
        <Layout>
          <CustomContent>
            <Outlet />
          </CustomContent>
        </Layout>
      </Layout>
    </Layout>
  );
};

const MenuWrapper = styled(Menu)`
  width: 200px;

  @media (max-width: 768px) {
    & .ant-menu-item {
      width: 78px;
    }
  }
`;

const CustomContent = styled(Content)`
  width: calc(100vw - 200px);
  margin-left: 200px;

  @media (max-width: 768px) {
    width: calc(100vw - 78px);
    margin-left: 78px;
  }
`;

const SiderWrapper = styled(MainSider)`
  position: fixed;
  margin-top: 64px;
  height: calc(100vh - 64px);
`;

const CustomHeader = styled(Header)`
  z-index: 1;
  position: fixed;
  width: 100%;
`;

export default Main;
