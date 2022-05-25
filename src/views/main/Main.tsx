import React, { useCallback, useEffect, useState } from "react";
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
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      width <= 1000
        ? setIsCollapsed(!isCollapsed)
        : setIsCollapsed(isCollapsed);
    };
  }, [width]);

  const onMenuChange: SelectEventHandler = (info) => {
    const routeName: string = info.key;
    navigate(`/${routeName}`);
  };

  return (
    <Layout>
      <Header>
        <LogoWrapper className="logo" to="/home">
          IT ME👀MS
        </LogoWrapper>
      </Header>
      <div>
        width: {width} ~ height: {height}
      </div>
      <Layout>
        <MainSider collapsed={isCollapsed}>
          <MenuWrapper
            onSelect={onMenuChange}
            mode="inline"
            items={menuElements}
          />
        </MainSider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const MenuWrapper = styled(Menu)`
  position: fixed;
  width: 200px;

  @media (max-width: 768px) {
    & .ant-menu-item {
      width: 78px;
    }
  }
`;

export default Main;
